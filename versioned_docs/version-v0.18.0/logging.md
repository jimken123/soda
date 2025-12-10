---
title: Logging Configuration
sidebar_label: Logging
description: Create defensible forensic and e-discovery automation workflows with robust logging using Sequence. Documentation and examples including structured logging, scopes, and NLog targets.
---

# Logging

## NLog

Sequence uses [NLog](https://nlog-project.org) for writing log messages
to various targets, including:

- Console
- File
- JSON
- Database
- Elastic Search

The NLog section of `appsettings.json` controls the format, detail level,
and logging targets.

The default nlog configuration supplied with Sequence writes to console and to
a file called `sequence.log` in the same directory as the `sequence` executable.
Minimum console severity is `Info` and file is `Debug`.

```json
"nlog": {
  "throwConfigExceptions": true,
  "variables": {
    "logname": "sequence"
  },
  "targets": {
    "fileTarget": {
      "type": "File",
      "fileName": "${basedir:fixtempdir=true}\\${logname}.log",
      "layout": "${date} ${level:uppercase=true} ${message} ${exception}"
    },
    "consoleInfo": {
      "type": "Console",
      "layout": "${date} ${message}"
    },
    "consoleError": {
      "type": "Console",
      "layout": "${date} ${level:uppercase=true} ${message}",
      "error": true
    }
  },
  "rules": [
    {
      "logger": "*",
      "minLevel": "Error",
      "writeTo": "fileTarget,consoleError",
      "final": true
    },
    {
      "logger": "*",
      "minLevel": "Info",
      "writeTo": "consoleInfo"
    },
    {
      "logger": "*",
      "minLevel": "Debug",
      "writeTo": "fileTarget"
    }
  ]
}
```

Please see the [NLog documentation](https://github.com/NLog/NLog.Extensions.Logging/wiki/NLog-configuration-with-appsettings.json)
for more details on how to configure various log targets.

## Log Messages

Core uses _structured logging_ across its Steps and Connectors.
Each log message has additional metadata appended to it to improve
auditability and help troubleshoot issues:

| Property      | Description                                                                                                                                                         |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Message       | The information or error message.                                                                                                                                   |
| MessageParams | Additional properties associated with the `Message`. For example, when logging that a step has successfully completed, one of the MessageParams is the result type. |
| StepName      | The name of the Step that has logged the message. Empty if the message is outside of a step e.g. when Sequence starts.                                              |
| Location      | Location information detailing where in a Sequence the message has been logged. A stack trace of sorts.                                                             |
| SequenceInfo  | A dictionary of additional properties associated with the running Step and/or Sequence.                                                                             |

### Logging Scopes

Sometimes it might be difficult to determing where in the execution
tree a particular log or error message might be coming from.

You can solve this problem by looking at the scope of the message.

To include scopes in the logging output, use the [ndlc layour renderer](https://github.com/NLog/NLog/wiki/NDLC-Layout-Renderer)

For example:

```json
"consoleInfo": {
  "type": "Console",
  "layout": "${date} ${message} (${ndlc:separator=\\\\})"
}
```

Will produce the following output (if log level is `Trace`):

```
> sequence.exe run scl "Print (2 + (3 * 4))"

2022/02/03 15:45:01.385 Sequence Started (Sequence)
2022/02/03 15:45:01.414 Print Started with Parameters: [Value, (2 + (3 * 4))] (Sequence\Print)
2022/02/03 15:45:01.414 Sum Started with Parameters: [Terms, [2, (3 * 4)]] (Sequence\Print\Sum)
2022/02/03 15:45:01.414 ArrayNew Started with Parameters: [Elements, [2, (3 * 4)]] (Sequence\Print\Sum\ArrayNew)
2022/02/03 15:45:01.431 Product Started with Parameters: [Terms, [3, 4]] (Sequence\Print\Sum\ArrayNew\Product)
2022/02/03 15:45:01.431 ArrayNew Started with Parameters: [Elements, [3, 4]] (Sequence\Print\Sum\ArrayNew\Product\ArrayNew)
2022/02/03 15:45:01.445 ArrayNew Completed Successfully with Result: [3, 4] (Sequence\Print\Sum\ArrayNew\Product\ArrayNew)
2022/02/03 15:45:01.445 Product Completed Successfully with Result: 12 (Sequence\Print\Sum\ArrayNew\Product)2022/02/03 15:45:01.445 ArrayNew Completed Successfully with Result: [2, 12] (Sequence\Print\Sum\ArrayNew)
2022/02/03 15:45:01.445 Sum Completed Successfully with Result: 14 (Sequence\Print\Sum)
14
2022/02/03 15:45:01.445 Print Completed Successfully with Result: Unit (Sequence\Print)
2022/02/03 15:45:01.458 Sequence Completed (Sequence)
```

## Full Example

This configuration logs to:

- Console
- File - `sequence.log`
- JSON file - `sequence.log.json`
- Elastic Search - `http://localhost:9200`

```json
"nlog": {
  "throwConfigExceptions": true,
  "variables": { "logname": "sequence" },
  "extensions": [{ "assembly": "NLog.Targets.ElasticSearch" }],
  "targets": {
    "jsonTarget": {
      "type": "File",
      "fileName": "${basedir:fixtempdir=true}\\${logname}.log.json",

      "layout": {
        "type": "JsonLayout",
        "includemdlc": true,
        "Attributes": [
          { "name": "level", "layout": "${level}" },
          { "name": "ts", "layout": "${date}" },
          { "name": "caller", "layout": "${ndlc:separator=\\\\}" },
          { "name": "msg", "layout": "${message}" },
          {
            "name": "properties",
            "encode": false,
            "layout": {
              "type": "JsonLayout",
              "includeallproperties": "true"
            }
          }
        ]
      }
    },
    "fileTarget": {
      "type": "File",
      "fileName": "${basedir:fixtempdir=true}\\${logname}.log",
      "layout": "${date} ${level:uppercase=true} ${message} ${exception}"
    },
    "consoleInfo": {
      "type": "Console",
      "layout": "${date} ${message}"
    },
    "consoleError": {
      "type": "Console",
      "layout": "${date} ${level:uppercase=true} ${message}",
      "error": true
    },
    "elastic": {
      "type": "BufferingWrapper",
      "flushTimeout": "5000",
      "target": {
        "type": "ElasticSearch",
        "uri": "http://localhost:9200",
        "index": "${logname}-${date:format=yyyy.MM.dd}",
        "fields": [
          { "name": "level", "layout": "${level:uppercase=true}" },
          {
            "name": "stepName",
            "layout": "${event-properties:StepName}"
          },
          { "name": "message", "layout": "${message}" },
          {
            "name": "result",
            "layout": "${event-properties:Result}"
          },
          {
            "name": "parameters",
            "layout": "${event-properties:Parameters}"
          },
          {
            "name": "error",
            "layout": "${event-properties:Error}"
          },
          {
            "name": "location",
            "layout": "${event-properties:Location:objectpath=AsString}"
          }
        ]
      }
    }
  },
  "rules": [
    {
      "logger": "*",
      "minLevel": "Error",
      "writeTo": "fileTarget,consoleError,jsonTarget,elastic",
      "final": true
    },
    {
      "logger": "*",
      "minLevel": "Trace",
      "writeTo": "consoleInfo"
    },
    {
      "logger": "*",
      "minLevel": "Trace",
      "writeTo": "fileTarget,jsonTarget,elastic"
    }
  ]
}
```

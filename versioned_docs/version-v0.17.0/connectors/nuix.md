---
description: Phoenix connector for Nuix. Easily automate workflows that create cases, ingest data, search, tag and filter, create item sets, export, and create reports.
---

# Nuix Connector

The Phoenix Nuix Connector allows users to automate forensic workflows using
[Nuix Workstation](https://www.nuix.com/products/nuixworkstation).

This connector has [Steps](/steps/Nuix) to:

- Create new cases
- Ingest concordance and loose files
- Search and tag items
- Create and update item and production sets
- Extract entities
- Create reports
- Export concordance or document metadata

[Nuix SCL examples available here](../examples/connectors/nuix/nuix.md).

Source code available on [GitLab](https://gitlab.com/Phoenix/connectors/nuix).

## Nuix Connector Settings

The NUIX Connector requires additional configuration which can be
provided using the `settings` key in `connectors.json`.

### Supported Settings

| Name                  | Required |    Type    | Description                                                                                                                        |
| :-------------------- | :------: | :--------: | :--------------------------------------------------------------------------------------------------------------------------------- |
| exeConsolePath        |    ✔     |  `string`  | The path to the Nuix Console application.                                                                                          |
| features              |    ✔     | `string[]` | The available Nuix features.                                                                                                       |
| version               |    ✔     | `Version`  | The installed version of Nuix.                                                                                                     |
| consoleArguments      |          | `string[]` | List of console arguments to append to the nuix command.                                                                           |
| consoleArgumentsPost  |          | `string[]` | List of console arguments to prepend to the nuix command.                                                                          |
| environmentVariables  |          | `string[]` | Environment variables to set before running Phoenix.                                                                              |
| ignoreWarningsRegex   |          |  `string`  | Regex used to ignore java warnings coming from the Nuix connection. The default values ignores warnings from Nuix Version up to 9. |
| ignoreErrorsRegex     |          |  `string`  | Regex used to ignore java errors coming from the Nuix connection. The default values ignores errors from Nuix Version up to 9.     |
| licencesourcelocation |          |  `string`  | Selects a licence source if multiple are available.                                                                                |
| licencesourcetype     |          |  `string`  | Selects a licence source type (e.g. dongle, server, cloud-server) to use.                                                          |
| licencetype           |          |  `string`  | Selects a licence type to use if multiple are available.                                                                           |
| licenceworkers        |          | `integer`  | Selects the number of workers to use if the choice is available.                                                                   |
| release               |          |   `bool`   | Releases the semi-offline licence at the end of the execution.                                                                     |
| signout               |          |   `bool`   | Signs the user out at the end of the execution, also releasing the semi-offline licence if present.                                |

### Using a License Dongle

```json
"Phoenix.Connectors.Nuix": {
  "id": "Phoenix.Connectors.Nuix",
  "enable": true,
  "version": "0.10.0",
  "settings": {
    "exeConsolePath": "C:\\Program Files\\Nuix\\Nuix 9.0\\nuix_console.exe",
    "version": "9.0",
    "licencesourcetype": "dongle",
    "features": [
      "ANALYSIS",
      "CASE_CREATION",
      "EXPORT_ITEMS",
      "METADATA_IMPORT",
      "OCR_PROCESSING",
      "PRODUCTION_SET"
    ]
  }
}
```

### Using a License Server

```json
"Phoenix.Connectors.Nuix": {
  "id": "Phoenix.Connectors.Nuix",
  "enable": true,
  "version": "0.10.0",
  "settings": {
    "exeConsolePath": "C:\\Program Files\\Nuix\\Nuix 9.0\\nuix_console.exe",
    "version": "9.0",
    "licencesourcetype": "server",
    "licencesourcelocation": "myserver",
    "licencetype": "law-enforcement-desktop",
    "ConsoleArgumentsPost": [
      "-Dnuix.licence.handlers=server",
      "-Dnuix.registry.servers=myserver"
    ],
    "EnvironmentVariables": {
      "NUIX_USERNAME": "user.name",
      "NUIX_PASSWORD": "password"
    },
    "features": [
      "ANALYSIS",
      "CASE_CREATION",
      "EXPORT_ITEMS",
      "METADATA_IMPORT",
      "OCR_PROCESSING",
      "PRODUCTION_SET"
    ]
  }
}
```

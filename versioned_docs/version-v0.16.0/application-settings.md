---
description: Documentation for logging and connector configuration for Sequence, the open-source automation toolkit for end-to-end forensic and ediscovery workflows.
---

# Application Settings

Sequence requires an `appsettings.json` that contains the following sections:

- [NLog](#logging) should contain logging configuration

A default [appsettings.json](pathname:///example-files/application-settings/appsettings-default.json)
file is provided with the application.

Examples can be found [here](./examples/application-settings.md).

## Logging

Core uses structured logging across its Steps and Connectors, and
Sequence uses [NLog](https://nlog-project.org) for writing log output to
various targets. NLog is fully configurable using the `appsettings.json`
file.

By default, only output to console and a text file is enabled, but there are other
log targets available including JSON file and Elastic Search.

Please see the [logging documentation](logging.md) for details and configuration examples.

## Connector Configuration

Connectors can be configured using the `connectors.json` file.
However, most configuration should be done by using `sequence connector` command.
See the [quick start](quick-start.md#connectors) for more info.

An example connector configuration:

```json
"ConfigurationName": {
  "id": "Connector.Id",
  "enable": true,
  "version": "0.13.0",
  "settings": {
    "additionalConfiguration": "This section is optional"
  }
}
```

### Supported Configuration Keys

| Key                | Description                                                                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Configuration Name | The name of the connector configuration. Must be unique.                                                                                                |
| `enable`           | Whether the configuration is enabled.                                                                                                                   |
| `id`               | The ID of the connector in the connector registry. Multiple configurations with the same `id` can exist, but only one of them can be enabled at a time. |
| `version`          | The version of the connector to install.                                                                                                                |
| `settings`         | An optional settings block. These are connector specific. See [nuix connector](connectors/nuix.md#nuix-connector-settings) for an example.              |

See the individual [connectors](connectors/nuix.md) documentation for more details
on what `settings` are supported for each connector.

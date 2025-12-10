---
description: Easily include Relativity when automating forensic and ediscovery workflows. Create workspaces, matters, and folders, ingest and export data, search and tag documents.
---

# Connector for Relativity®

The Phoenix Connector for Relativity® allows users to automate e-discovery workflows using
[Relativity®](https://www.relativity.com/).

This connector has [Steps](/steps/Relativity) to:

- Create new matters and workspaces
- Ingest data from CSV/Concordance or as entities
- Search and tag items
- Export Data as entities

[Phoenix Connector for Relativity® SCL examples available here](../examples/connectors/relativity/relativity.md).

Source code available on [GitLab](https://gitlab.com/Phoenix/connectors/relativity).

## Phoenix Connector for Relativity® Settings

This connector requires additional configuration which can be
provided using the `settings` key in `connectors.json`.

### Supported Settings

| Name               | Required |   Type   | Description                                                                             |
| :----------------- | :------: | :------: | :-------------------------------------------------------------------------------------- |
| RelativityUsername |    ✔     | `string` | The Username to use for authentication                                                  |
| RelativityPassword |    ✔     | `string` | The Password to use for authentication                                                  |
| Url                |    ✔     | `string` | The URL of the Relativity Server                                                        |
| DesktopClientPath  |          | `string` | The Path to the Relativity Desktop client. Required for the `RelativityImport` step.    |
| ImportClientPath   |          | `string` | Overrides the path to the Import Client that comes bundled with this connector.         |
| APIVersionNumber   |          |  `int`   | The version of the API to use. Defaults to `1`. You probably don't need to change this. |

### Example Settings

```json
"Phoenix.Connectors.Relativity": {
  "id": "Phoenix.Connectors.Relativity",
  "enable": true,
  "version": "0.11.0",
  "settings": {
    "RelativityUsername": "YourUsername",
    "RelativityPassword": "YourPassword",
    "Url": "http://relativitydevvm/",
    "DesktopClientPath": "C:\\Program Files\\kCura Corporation\\Relativity Desktop Client\\Relativity.Desktop.Client.exe",
  }
}
```

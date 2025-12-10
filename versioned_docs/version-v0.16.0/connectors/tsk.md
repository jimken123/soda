---
description: Sequence connector for Autopsy / The Sleuth Kit. Include TSK in your automation workflows. Create cases, ingest data, generate reports, and list data sources.
---

# The Sleuth Kit® Connector

The Sleuth Kit Connector allows users to automate forensic workflows
using [The Sleuth Kit](https://www.sleuthkit.org/) and
[Autopsy](https://www.autopsy.com/).

This connector has [Steps](/steps/TSK) to:

- Create New Cases
- Add Data Sources To a Case
- Generate Case Reports
- Create a List of Case Data Sources

[TSK SCL examples available here](../examples/connectors/tsk/tsk.md).

Source code available on [GitLab](https://gitlab.com/sequence/connectors/tsk).

The Steps all use the [Autopsy command line](http://sleuthkit.org/autopsy/docs/user-docs/4.19.0/command_line_ingest_page.html).

## TSK Connector Settings

The TSK Connector requires additional configuration which can be
provided using the `settings` key in `connectors.json`.

### Supported Settings

| Name        | Required |   Type   | Description                            |
| :---------- | :------: | :------: | :------------------------------------- |
| AutopsyPath |    ✔     | `string` | The Path the to the Autopsy Executable |

### Example Settings

```json
"Sequence.Connectors.TSK": {
  "id": "Sequence.Connectors.TSK",
  "enable": true,
  "version": "0.13.0",
  "settings": {
    "AutopsyPath": "C:\\Program Files\\Autopsy-4.19.1\\bin\\autopsy64.exe"
  }
}
```

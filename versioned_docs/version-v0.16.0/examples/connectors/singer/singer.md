---
sidebar_label: Singer Connector
sidebar_position: 0
description: Learn how to use Phoenix as a Singer target and receive data from any of its taps when automating forensic and ediscovery workflows.
---

# Singer Connector Examples

## Setup

1. Download and set up Phoenix. See the [quick start](../../../quick-start.md) for more info.
2. Add the Singer connector. See [connectors](../../../quick-start.md#connectors)
   for more info on managing connectors.

```powershell
./Phoenix.exe connector add Phoenix.Connectors.Singer
```

## Examples

- [Import Data from Slack](import-data-from-slack.md)

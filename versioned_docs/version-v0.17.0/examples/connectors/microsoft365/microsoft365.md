---
sidebar_label: Microsoft365 Connector
sidebar_position: 0
description: Examples of how to use Phoenix to include Microsoft365 in automated end-to-end forensic and ediscovery workflows.
---

# Microsoft365 Connector Examples

## Setup

1. Download and set up Phoenix. See the [quick start](../../../quick-start.md) for more info.
2. Add the Phoenix Connector for Microsoft365. See [connectors](../../../quick-start.md#connectors)
   for more info on managing connectors.

```poweshell
PS > .\Phoenix.exe connector add Phoenix.Connectors.Microsoft365
```

3. Add the required Microsoft365 configuration to `./lib/connectors.json`.
   See [Microsoft365 Connector Settings](../../../connectors/microsoft365.md#microsoft365-connector-settings).

## Examples

### [Login](microsoft365-login.md)

Login to Microsoft 365 and log the Token

### [Get Teams](microsoft365-get-teams.md)

Get a list of teams from Microsoft 365

### [Get Team Channels](microsoft365-get-teams.md)

Get a list of channel names for a particular team from Microsoft 365

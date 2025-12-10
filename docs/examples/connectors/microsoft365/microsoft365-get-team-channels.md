---
title: Get Teams Channels | Microsoft365 Connector Examples
sidebar_label: Get Teams Channels
---

# Get Teams Channels

This example will

- Login to Microsoft 365 with a token. (You must replace the token in the SCL)
- Log a list of all channel names in the given team

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Microsoft 365](microsoft365.md)

## SCL

Download the SCL here: [microsoft365-get-team-channels.scl](pathname:///example-files/microsoft365/microsoft365-get-team-channels.scl)

To run:

```powershell
PS > ./sequence.exe run microsoft365-get-team-channels.scl
```

```scl
- M365Login Token: 'abc'
- <data> = M365ChannelsRead TeamName:'MyTeam' | Map (<>.DisplayName)
- Log <data>
```

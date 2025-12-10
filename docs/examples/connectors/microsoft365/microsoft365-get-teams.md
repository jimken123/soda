---
title: Get Teams | Microsoft365 Connector Examples
sidebar_label: Get Teams
---

# Get Teams

This example will

- Login to Microsoft 365 with a token. (You must replace the token in the SCL)
- Log a a list of all teams that the user has access to

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Microsoft 365](microsoft365.md)

## SCL

Download the SCL here: [microsoft365-get-teams.scl](pathname:///example-files/microsoft365/microsoft365-get-teams.scl)

To run:

```powershell
PS > ./sequence.exe run microsoft365-get-teams.scl
```

```scl
- M365Login Token: 'abc'
- <data> = M365TeamsRead
- Log (EntityFormat <data>)
```

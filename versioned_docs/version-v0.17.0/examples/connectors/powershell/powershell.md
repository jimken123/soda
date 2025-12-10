---
sidebar_label: PowerShell Connector
sidebar_position: 0
description: Learn how to further customise Sequence by including powershell scripts in your automated forensic and ediscovery workflows.
---

# PowerShell Connector Examples

## Setup

1. Download and set up Sequence. See the [quick start](../../../quick-start.md) for more info.
2. Add the PowerShell connector. See [connectors](../../../quick-start.md#connectors)
   for more info on managing connectors.

```powershell
./sequence.exe connector add Sequence.Connectors.Pwsh
```

## Examples

Run a powershell script with no input or output stream:

```powershell
- PwshRun Script: 'Write-Information $Message' WithVariables: (Message: 'Hello there!')
```

Run an inline script that returns two `PSObjects` and prints them:

```powershell
- ForEach
    Array: (
      PwshRunScriptAsync Script: "@( [pscustomobject]@{ key1 = 'one'; key2 = 2 }, [pscustomobject]@{ key1 = 'three'; key2 = 4 }) | Write-Output"
    )
    Action: (Print <>)
```

Run a script that receives input as an Entity stream:

```powershell
- <Input> = [
    (prop1: "value1" prop2: 2),
    (prop1: "value3" prop2: 4)
  ]
- ForEach
    Array: (
      PwshRunScriptAsync
        Script: "$input | ForEach-Object { Write-Output $_ }"
        Input: <Input>
    )
    Action: (Print <>)
```

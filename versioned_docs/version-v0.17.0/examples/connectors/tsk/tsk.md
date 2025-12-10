---
sidebar_label: The Sleuth Kit Connector
sidebar_position: 0
description: Examples of how to use Sequence to include Autopsy / TSK in automated forensic and ediscovery workflows.
---

# The Sleuth Kit® Connector Examples

## Setup

1. Download and set up Sequence. See the [quick start](../../../quick-start.md) for more info.
2. Add the TSK connector. See [connectors](../../../quick-start.md#connectors)
   for more info on managing connectors.

```poweshell
PS > .\sequence.exe connector add Sequence.Connectors.TSK
```

3. Add the required TSK configuration to `./lib/connectors.json`.

See [readme](../../../connectors/tsk.md) for information about connector settings.

## Examples

### [Create an Autopsy Case and Add Data](tsk-create-case-and-add-data.md)

Create a new case and add data to it

### [Generate Reports for Autopsy Case](tsk-create-reports.md)

Create Reports from a case

### [Import From Nuix into Autopsy](tsk-import-from-nuix.md)

An example of creating a case in nuix, importing data into it, exporting that data, and then importing that data into Autopsy

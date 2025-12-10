---
sidebar_label: Sequence Connector for Relativity
sidebar_position: 0
description: Examples of how to use Sequence to include Relativity in automated end-to-end forensic and ediscovery workflows.
---

# Sequence Connector for Relativity® Examples

## Setup

1. Download and set up Sequence. See the [quick start](../../../quick-start.md) for more info.
2. Add the Sequence Connector for Relativity®. See [connectors](../../../quick-start.md#connectors)
   for more info on managing connectors.

```poweshell
PS > .\sequence.exe connector add Sequence.Connectors.Relativity
```

3. Add the required Relativity® configuration to `./lib/connectors.json`.
   See [Sequence Connector for Relativity®](../../../connectors/relativity.md#relativity-connector-settings)

## Examples

### [Create Workspace](relativity-create-workspace.md)

Create a new workspace and add fields to it.

### [Search and Tag Items](relativity-search-and-tag.md)

An example of how to search and tag items in an existing workspace.

### [Export Entities](relativity-export-entities.md)

An example of how to export documents as entities.

### [Import Entities](relativity-import-entities.md)

An example of how to import entities into an existing workspace as documents.

### [Import Concordance](relativity-import-concordance.md)

An example of how to import a concordance file into a workspace.

### [Export from Nuix and Import into Relativity](relativity-import-from-nuix.md)

An example of how to export data from Nuix and import it into a Relativity Workspace.

### [End-to-end Example](relativity-end-to-end.md)

A combination of the above examples - create workspace, import data, search and tag, then export.

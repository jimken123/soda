---
title: Import Entities | Phoenix Connector for Relativity Examples
sidebar_label: Import Entities
---

# Import Entities

This example will import entities into a Relativity Workspace.
In this example the entities come from a .csv file but in reality they could come from any source.

When importing from your own CSV file you could either make sure that the column headers match
your Relativity workspace fields or use The `EntityMapProperties` step to map them.

## Setup

[Instructions on how to install and setup Phoenix and the Phoenix Connector for Relativity®.](relativity.md)

To load the data from a .csv file you need to add the StructuredData and FileSystem connectors

## SCL

Download the SCL here: [relativity-import-entities.scl](pathname:///example-files/relativity/relativity-import-entities.scl)
Download the example entity import here: [relativity-example-files.zip](pathname:///example-files/relativity/relativity-example-files.zip)

To run:

```powershell
PS > ./Phoenix.exe run relativity-import-entities.scl
```

```scl
# Set the name of your workspace. You could also use Workspace Artifact Id
- <WorkspaceName> = 'Test Workspace'

- <ImportPath> = '.\files'

# The Path to the folder containing the native files
- <NativeFolder> = PathCombine [<ImportPath> 'Natives']
- <CsvPath> = PathCombine [<ImportPath> 'example-entities.csv']

# Import Data
- Log "Importing Entities."
# Read entities from a CSV file. You could also try reading them from another file or a database
- <Entities> = FileRead <CsvPath> | FromCSV Delimiter: "\t"

# Map fields in your file to fields in your Workspace
- <MappedEntities> = <Entities>
| EntityMapProperties Mappings: ('DocId': 'Control Number')
| EntityMap (In <> Set: 'File Path' To: (PathCombine [<NativeFolder>, <>['File Path']]))

# Create a schema from the entities. You could also provide your own schema
- <Schema> = CreateSchema Entities: <MappedEntities>

- RelativityImportEntities
    Workspace: <WorkspaceName>
    Entities: <MappedEntities>
    Schema: <Schema>
    ControlNumberField: 'Control Number'
    FilePathField: 'File Path'
    FolderPathField: 'Folder Path'

- Log $"Imported {ArrayLength <MappedEntities>} Entities."
```

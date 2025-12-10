---
title: Export Entities | Sequence Connector for Relativity Examples
sidebar_label: Export Entities
---

# Export Entities

This example will export entities from a Relativity Workspace and write them to a .csv file

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Relativity®.](relativity.md)

To write the data to a .csv file you need to add the StructuredData and FileSystem connectors

## SCL

Download the SCL here: [relativity-export-entities.scl](pathname:///example-files/relativity/relativity-export-entities.scl)

To run:

```powershell
PS > ./sequence.exe run relativity-export-entities.scl
```

```scl
# Set the name of your workspace. You could also use Workspace Artifact Id
- <WorkspaceName> = 'Test Workspace'
- <ExportFilter>  = "'Tags' LIKE 'Important'"
- <OutputPath>    = 'entities.csv'

# Export the entities
- <ExportedEntities> = RelativityExport
                         Workspace: <WorkspaceName>
                         Condition: <ExportFilter>
                         FieldNames: ['Title', 'Tags']

# Define a schema
- <Schema> = (
  'title': "RelativityData"
  'additionalProperties': False
  'properties': (
    'Title': ('type': "string")
    'Tags': ('type': "string")
    )
  'required': ["Title", "Tags"]
  )

# Apply the schema to the entities
- <MappedExportedEntities> = Validate EntityStream: <ExportedEntities> Schema: <Schema>

# Write the entities to a csv file
- <MappedExportedEntities> | ToCSV | Log
- <MappedExportedEntities> | ToCSV | FileWrite <OutputPath>
- Log $"Exported {ArrayLength <MappedExportedEntities>} Entities."
```

---
title: End to End Example | Sequence Connector for Relativity Examples
sidebar_label: End to End Example
---

# End to End Example

This example will

- Delete all existing Workspaces called 'Test Workspace'
- Create a Matter called 'Test Matter' if it doesn't already exist
- Create a Workspace called 'Test Workspace'
- Create a Fixed Length Field in the Workspace called 'Tags'

- Import some documents from a csv file
- Tag entities with a particular title
- Export the tagged entities to a new file

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Relativity®.](relativity.md)
To load the data from a .csv file you need to add the StructuredData and FileSystem connectors

## SCL

Download the SCL here: [relativity-end-to-end.scl](pathname:///example-files/relativity/relativity-end-to-end.scl)
Download the example entity import here: [relativity-example-files.zip](pathname:///example-files/relativity/relativity-example-files.zip)

To run:

```powershell
PS > ./sequence.exe run relativity-end-to-end.scl
```

```scl
- <MatterName>     = 'Test Matter'
- <WorkspaceName>  = 'Test Workspace'
- <FieldsToCreate> = ['Tags']

# The Base Path of the files to import
- <BasePath> = '.\files'

- <Search> = "'Title' LIKE 'Clouds'"  # Define your search here
- <Tag>    = "Important"

- <ExportFilter> = "'Tags' LIKE 'Important'"
- <OutputPath>   = 'entities.csv'

- <CsvPath> = PathCombine [<BasePath> 'example-entities.csv']
- <NativeFolder> = PathCombine [<BasePath> 'Natives']

# Delete Workspaces with the Given Name
- <ExistingWorkspaces> = RelativitySendQuery
    Workspace: -1
    Condition: $"'Name' == '{<WorkspaceName>}'"
    Start: 0
    Length: 100
    SortDirection: SortEnum.Ascending
    ArtifactType: ArtifactType.Case
- Log $"Deleting {ArrayLength <ExistingWorkspaces>} workspaces"
- ForEach <ExistingWorkspaces> Action: (RelativityDeleteWorkspace Workspace: <>["ArtifactId"])

# Create Matter and Workspace
- <MatterExists> = ArrayIsEmpty (
    RelativitySendQuery
      Workspace: -1
      Condition: $"'Name' == '{<MatterName>}'"
      Start: 0
      Length: 100
      SortDirection: SortEnum.Ascending
      ArtifactType: ArtifactType.Matter
  )

- If <MatterExists>
    Then: (
      - Log Value: "Test Matter does not exist, creating it."
      - RunStep (
          RelativityCreateMatter
            Client: "Test Client"
            Status: 671
            MatterName: <MatterName>
            Number: "Ten"
            Keywords: "Test Keywords"
            Notes: "Test Notes"
        )
    )
    Else: (Log Value: "Test Matter already exists, it will not be created.")

- Log 'Creating Workspace'

- <NewWorkspaceDetails> = RelativityCreateWorkspace
                            WorkspaceName: <WorkspaceName>
                            Matter: <MatterName>
                            TemplateId: "Relativity Starter Template"
                            StatusId: 675
                            ResourcePoolId: "Default"
                            SqlServerId: 1015096
                            DefaultFileRepositoryId: 1014887
                            DefaultCacheLocationId: 1015534

- Log <NewWorkspaceDetails>
- Log 'Workspace Created'

# Create Fields
- ForEach <FieldsToCreate> Action: (
    - <FieldId> = RelativityCreateField <WorkspaceName> <>
    - Log $"Created Field '{<>}' with id {<FieldId>}"
  )

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

# Tag Files
- Log $"Tagging Files"

- <FilesToTag> = RelativitySendQuery
                   Workspace: <WorkspaceName>
                   Condition: <Search>
                   Start: 0
                   Length: 100 # The max number of objects to tag

- ForEach <FilesToTag> Action: (
    RelativityUpdateObject
      Workspace: <WorkspaceName>
      ObjectArtifactId: <>["ArtifactId"]
      FieldValues: ('Tags': <Tag>)
  )

- Log $"Tagged {ArrayLength <FilesToTag>} Files."

# Export the entities
- <ExportedEntities> = RelativityExport
                         Workspace: <WorkspaceName>
                         Condition: <ExportFilter>
                         FieldNames: ['Title', 'Tags']

# Define a schema
- <Schema> = (
    'Name': "ValueIf Schema"
    'Properties': (
      'Title': ('Type': 'String')
      'Tags':  ('Type': 'String')
    )
  )

# Apply the schema to the entities
- <MappedExportedEntities> = Transform EntityStream: <ExportedEntities> Schema: <Schema>

# Write the entities to a csv file
- <MappedExportedEntities> | ToCSV | Log
- <MappedExportedEntities> | ToCSV | FileWrite <OutputPath>
- Log $"Exported {ArrayLength <MappedExportedEntities>} Entities."
```

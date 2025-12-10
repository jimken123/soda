---
title: Create Workspace | Sequence Connector for Relativity Examples
sidebar_label: Create Workspace
---

# Create Workspace

This example will

- Delete all existing Workspaces called 'Test Workspace'
- Create a Matter called 'Test Matter' if it doesn't already exist
- Create a workspace called 'Test Workspace'
- Create a Fixed Length Field in the Workspace called 'Tags'

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Relativity®.](relativity.md)

## SCL

Download the SCL here: [relativity-create-workspace.scl](pathname:///example-files/relativity/relativity-create-workspace.scl)

To run:

```powershell
PS > ./sequence.exe run relativity-create-workspace.scl
```

```scl
- <MatterName>     = 'Test Matter'
- <WorkspaceName>  = 'Test Workspace'
- <FieldsToCreate> = ['Tags']

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
```

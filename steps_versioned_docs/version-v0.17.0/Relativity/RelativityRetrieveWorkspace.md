---
title: RelativityRetrieveWorkspace Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityRetrieveWorkspace
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityRetrieveWorkspace
_Alias_:`RelativityRetrieveWorkspace`

_Output_:`Entity`


|Parameter      |Type             |Required|Position|Default Value|Summary                                                                      |
|:--------------|:---------------:|:------:|:------:|:-----------:|:----------------------------------------------------------------------------|
|Workspace      |`int` or `string`|✔       |1       |             |The Workspace to retrieve. You can provide either the Artifact Id or the name|
|IncludeMetadata|`bool`           |        |2       |false        |Whether to include metadata in the result                                    |
|IncludeActions |`bool`           |        |3       |false        |Whether to include actions in the result                                     |
## Examples
#### SCL
```scl
RelativityRetrieveWorkspace Workspace: 11 IncludeMetadata: True IncludeActions: True
```
#### Expected Output
```scl
(Client: "" ClientNumber: "" DownloadHandlerUrl: "" EnableDataGrid: False Matter: "" MatterNumber: "" ProductionRestrictions: "" ResourcePool: "" DefaultFileRepository: "" DataGridFileRepository: "" DefaultCacheLocation: "" SqlServer: "" AzureCredentials: "" AzureFileSystemCredentials: "" SqlFullTextLanguage: "" Status: "" WorkspaceAdminGroup: "" Keywords: "" Notes: "" CreatedOn: 0001-01-01T00:00:00.0000000 CreatedBy: "" LastModifiedBy: "" LastModifiedOn: 0001-01-01T00:00:00.0000000 Meta: (Unsupported: "" ReadOnly: ["Meta", "Data"]) Actions: [(Name: "MyAction" Href: "" Verb: "Post" IsAvailable: True Reason: "")] Name: "" ArtifactID: 11 Guids: "")
```
---
title: RelativityUpdateFolder Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityUpdateFolder
description: Update a Relativity folder. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityUpdateFolder
_Alias_:`RelativityUpdateFolder`

_Output_:`Unit`

Update a Relativity folder


|Parameter            |Type             |Required|Position|Summary                                                                                |
|:--------------------|:---------------:|:------:|:------:|:--------------------------------------------------------------------------------------|
|Workspace            |`int` or `string`|✔       |1       |The Workspace containing the folder. You can provide either the Artifact Id or the name|
|FolderId             |`int`            |✔       |2       |The Id of the folder you want to update                                                |
|FolderName<br/>_Name_|`string`         |✔       |3       |The new name of the folder.                                                            |
## Examples
#### SCL
```scl
RelativityUpdateFolder Workspace: 11 FolderId: 22 FolderName: "NewName"
```
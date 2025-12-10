---
title: RelativityGetSubfolders Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityGetSubfolders
description: Gets all children of a folder. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityGetSubfolders
_Alias_:`RelativityGetSubfolders`

_Output_:`Array<T>`

Gets all children of a folder


|Parameter       |Type             |Required|Position|Summary                                                                               |
|:---------------|:---------------:|:------:|:------:|:-------------------------------------------------------------------------------------|
|Workspace       |`int` or `string`|✔       |1       |The Workspace containing the folder You can provide either the Artifact Id or the name|
|FolderArtifactId|`int`            |✔       |2       |The Id of the folder.                                                                 |
## Examples
#### SCL
```scl
RelativityGetSubfolders Workspace: 11 FolderArtifactId: 22
```
#### Expected Output
```scl
[(Name: MySubFolder, ArtifactID: 12345, HasChildren: true, Selected: false)]
```
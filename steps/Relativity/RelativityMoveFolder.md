---
title: RelativityMoveFolder Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityMoveFolder
description: Move a folder and its children, including subfolders and documents. . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityMoveFolder
_Alias_:`RelativityMoveFolder`

_Output_:`Entity`

Move a folder and its children, including subfolders and documents.


|Parameter                  |Type             |Required|Position|Summary                                                                                        |
|:--------------------------|:---------------:|:------:|:------:|:----------------------------------------------------------------------------------------------|
|Workspace                  |`int` or `string`|✔       |1       |The Workspace containing the folder to move. You can provide either the Artifact Id or the name|
|FolderArtifactId           |`int`            |✔       |2       |The Id of the folder.                                                                          |
|DestinationFolderArtifactId|`int`            |✔       |3       |The Id of the destination folder.                                                              |
## Examples
#### SCL
```scl
RelativityMoveFolder Workspace: 11 FolderArtifactId: 33 DestinationFolderArtifactId: 22
```
#### Expected Output
```scl
(TotalOperations: 1 ProcessState: "Complete" OperationsCompleted: 1)
```
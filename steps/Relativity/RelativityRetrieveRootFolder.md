---
title: RelativityRetrieveRootFolder Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityRetrieveRootFolder
description: Retrieve the root folder of a Workspace. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityRetrieveRootFolder
_Alias_:`RelativityRetrieveRootFolder`

_Output_:`Entity`

Retrieve the root folder of a Workspace


|Parameter|Type             |Required|Position|Summary                                                          |
|:--------|:---------------:|:------:|:------:|:----------------------------------------------------------------|
|Workspace|`int` or `string`|✔       |1       |The Workspace. You can provide either the Artifact Id or the name|
## Examples
#### SCL
```scl
RelativityRetrieveRootFolder Workspace: 42
```
#### Expected Output
```scl
(Name: MyRootFolder, ArtifactId: 123, HasChildren: true, Selected: false)
```
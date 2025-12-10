---
title: RelativityRetrieveWorkspaceStatistics Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityRetrieveWorkspaceStatistics
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityRetrieveWorkspaceStatistics
_Alias_:`RelativityRetrieveWorkspaceStatistics`

_Output_:`Entity`


|Parameter|Type             |Required|Position|Summary                                                                      |
|:--------|:---------------:|:------:|:------:|:----------------------------------------------------------------------------|
|Workspace|`int` or `string`|✔       |1       |The Workspace to retrieve. You can provide either the Artifact Id or the name|
## Examples
#### SCL
```scl
RelativityRetrieveWorkspaceStatistics Workspace: 42
```
#### Expected Output
```scl
(DocumentCount: 1234 FileSize: 5678)
```
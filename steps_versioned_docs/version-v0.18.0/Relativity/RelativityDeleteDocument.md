---
title: RelativityDeleteDocument Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityDeleteDocument
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityDeleteDocument
_Alias_:`RelativityDeleteDocument`

_Output_:`Entity`


|Parameter       |Type             |Required|Position|Summary                                                                                          |
|:---------------|:---------------:|:------:|:------:|:------------------------------------------------------------------------------------------------|
|Workspace       |`int` or `string`|✔       |1       |The Workspace containing the object to delete. You can provide either the Artifact Id or the name|
|ObjectArtifactId|`int`            |✔       |2       |The id of the object to delete                                                                   |
## Examples
#### SCL
```scl
RelativityDeleteDocument Workspace: 11 ObjectArtifactId: 22
```
#### Expected Output
```scl
(Count: 1, DeletedItems: [(ObjectTypeName: "document" Action: "delete" Count: 1 Connection: "object")])
```
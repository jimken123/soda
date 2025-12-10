---
title: RelativityExport Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityExport
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityExport
_Alias_:`RelativityExport`

_Output_:`Array<T>`


|Parameter |Type             |Required|Position|Default Value|Example                |Summary                                                                         |
|:---------|:---------------:|:------:|:------:|:-----------:|:---------------------:|:-------------------------------------------------------------------------------|
|Workspace |`int` or `string`|✔       |1       |             |                       |The Workspace to export from. You can provide either the Artifact Id or the name|
|BatchSize |`int`            |        |        |10           |                       |The batch size to use when retrieving entities.                                 |
|Condition |`string`         |        |        |No condition |'Extracted Text' ISSET |The condition that documents must meet to be exported                           |
|FieldNames|`array<string>`  |✔       |        |             |                       |Names of fields to export                                                       |
## Examples
#### SCL
```scl
RelativityExport Workspace: 12345 Condition: "'Extracted Text' ISSET " FieldNames: ["Field1", "Field2"] BatchSize: 10
```
#### Expected Output
```scl
[(Field1: "Hello" Field2: "World" NativeFile: "Native File Text")]
```
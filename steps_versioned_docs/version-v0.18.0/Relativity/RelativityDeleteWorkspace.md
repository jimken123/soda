---
title: RelativityDeleteWorkspace Step | Phoenix Connector for Relativity Documentation
sidebar_label: RelativityDeleteWorkspace
description: Deletes a relativity workspace. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityDeleteWorkspace
_Alias_:`RelativityDeleteWorkspace`

_Output_:`Unit`

Deletes a relativity workspace


|Parameter|Type             |Required|Position|Summary                                                                    |
|:--------|:---------------:|:------:|:------:|:--------------------------------------------------------------------------|
|Workspace|`int` or `string`|✔       |1       |The Workspace to delete. You can provide either the Artifact Id or the name|
## Examples
Deletes workspace 42
#### SCL
```scl
RelativityDeleteWorkspace 42
```
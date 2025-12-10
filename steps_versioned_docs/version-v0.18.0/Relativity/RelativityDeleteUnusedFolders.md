---
title: RelativityDeleteUnusedFolders Step | Phoenix Connector for Relativity Documentation
sidebar_label: RelativityDeleteUnusedFolders
description: Deletes unused folders in a relativity workspace. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityDeleteUnusedFolders
_Alias_:`RelativityDeleteUnusedFolders`

_Output_:`Unit`

Deletes unused folders in a relativity workspace


|Parameter|Type             |Required|Position|Summary                                                                                       |
|:--------|:---------------:|:------:|:------:|:---------------------------------------------------------------------------------------------|
|Workspace|`int` or `string`|✔       |1       |The Workspace to delete unused folders from You can provide either the Artifact Id or the name|
## Examples
#### SCL
```scl
RelativityDeleteUnusedFolders Workspace: 42
```
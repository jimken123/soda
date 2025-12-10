---
title: RelativityDeleteMatter Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityDeleteMatter
description: Delete a matter. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityDeleteMatter
_Alias_:`RelativityDeleteMatter`

_Output_:`Unit`

Delete a matter


|Parameter       |Type |Required|Position|Summary                                |
|:---------------|:---:|:------:|:------:|:--------------------------------------|
|MatterArtifactId|`int`|✔       |1       |The artifact id of the matter to delete|
## Examples
#### SCL
```scl
RelativityDeleteMatter 123
```
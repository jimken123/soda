---
title: EntityFlatten Step | Core SDK Documentation
sidebar_label: EntityFlatten
description: Recursively flatten an entity, turning all nested entities into separate fields. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntityFlatten
_Alias_:`EntityFlatten`

_Output_:`Entity`

Recursively flatten an entity, turning all nested entities into separate fields


|Parameter|Type    |Required|Position|Summary                           |
|:--------|:------:|:------:|:------:|:---------------------------------|
|Entity   |`entity`|✔       |1       |The entity to set the property on.|
## Examples
#### SCL
```scl
(a.b.c: 1) | EntityFlatten
```
#### Expected Output
```scl
('a.b.c': 1)
```
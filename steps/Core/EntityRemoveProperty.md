---
title: EntityRemoveProperty Step | Core SDK Documentation
sidebar_label: EntityRemoveProperty
description: Returns a copy of the entity with the specified property removed. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntityRemoveProperty
_Alias_:`EntityRemoveProperty`, `Remove`, `RemoveProperty`

_Output_:`Entity`

Returns a copy of the entity with the specified property removed


|Parameter        |Type    |Required|Position|Summary                               |
|:----------------|:------:|:------:|:------:|:-------------------------------------|
|Entity<br/>_From_|`entity`|✔       |1       |The entity to remove the property from|
|Property         |`string`|✔       |        |The name of the property to remove    |
## Examples
### Example 1
#### SCL
```scl
EntityRemoveProperty Entity: ('type': 'A', 'value': 1) Property: 'type'
```
#### Expected Output
```scl
('value': 1)
```
### Example 2
#### SCL
```scl
Remove From: ('type': 'A', 'value': 1) Property: 'value'
```
#### Expected Output
```scl
('type': "A")
```
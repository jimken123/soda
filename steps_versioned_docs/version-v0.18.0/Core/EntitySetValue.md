---
title: EntitySetValue Step | Core SDK Documentation
sidebar_label: EntitySetValue
description: Returns a copy of the entity with this property set. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntitySetValue
_Alias_:`EntitySetValue`, `In`

_Output_:`Entity`

Returns a copy of the entity with this property set. Will add a new property if the property is not already present.


|Parameter         |Type    |Required|Position|Summary                              |
|:-----------------|:------:|:------:|:------:|:------------------------------------|
|Entity            |`entity`|✔       |1       |The entity to set the property on.   |
|Property<br/>_Set_|`string`|✔       |2       |The name of the property to set.     |
|Value<br/>_To_    |`T`     |✔       |3       |The new value of the property to set.|
## Examples
### Example 1
#### SCL
```scl
EntitySetValue Entity: ('type': 'A', 'value': 1) Property: 'type' Value: 'C'
```
#### Expected Output
```scl
('type': "C" 'value': 1)
```
### Example 2
#### SCL
```scl
In ('type': 'C', 'value': 1) Set: 'type' To: 'A'
```
#### Expected Output
```scl
('type': "A" 'value': 1)
```
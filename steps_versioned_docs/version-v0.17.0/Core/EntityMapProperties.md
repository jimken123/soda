---
title: EntityMapProperties Step | Core SDK Documentation
sidebar_label: EntityMapProperties
description: Rename entity properties. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntityMapProperties
_Alias_:`EntityMapProperties`, `RenameEntityFields`, `RenameProperties`, `RenameProps`

_Output_:`Array<T>`

Rename entity properties


|Parameter            |Type           |Required|Position|Summary                                                                                                                                                                                    |
|:--------------------|:-------------:|:------:|:------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|EntityStream<br/>_In_|`array<entity>`|✔       |1       |The stream of entities to change the field names of.                                                                                                                                       |
|Mappings<br/>_To_    |`entity`       |✔       |2       |An entity containing mappings. The keys in the entity will be the new column names. The value of each property should either the name of the source column or a list of source column names|
## Examples
### Example 1
#### SCL
```scl
EntityMapProperties In: [
  ('typeA': 'A', 'valueA': 1)
  ('typeB': 'B', 'valueB': 2)
  ('typeA': 'A', 'valueA': 3)
] Mappings: ('value': ['valueA', 'valueB'] 'type': ['typeA', 'typeB'])
```
#### Expected Output
```scl
[('type': "A" 'value': 1), ('type': "B" 'value': 2), ('type': "A" 'value': 3)]
```
### Example 2
#### SCL
```scl
RenameProperties In: [('a': 1), ('b': 1), ('c': 1)] To: ('value': ['a', 'b', 'c'])
```
#### Expected Output
```scl
[('value': 1), ('value': 1), ('value': 1)]
```
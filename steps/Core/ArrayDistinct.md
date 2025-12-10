---
title: ArrayDistinct Step | Core SDK Documentation
sidebar_label: ArrayDistinct
description: Removes duplicate elements in an array or entities in an entity stream. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayDistinct
_Alias_:`ArrayDistinct`, `Distinct`, `RemoveDuplicates`

_Output_:`Array of T`

Removes duplicate elements in an array or entities in an entity stream. By default, all entity properties are used to determine duplicates. This behaviour can be changed by using the `KeySelector` parameter.


|Parameter              |Type      |Required|Position|Default Value  |Summary                                                                                                                   |
|:----------------------|:--------:|:------:|:------:|:-------------:|:-------------------------------------------------------------------------------------------------------------------------|
|Array<br/>_In_         |`array<T>`|✔       |1       |               |The array to sort                                                                                                         |
|KeySelector<br/>_Using_|`T`       |        |2       |The item/entity|A function that gets the key to distinct by from the variable To distinct by multiple properties, concatenate several keys|
|IgnoreCase             |`bool`    |        |3       |False          |Whether to ignore case when comparing strings.                                                                            |
## Examples
### Example 1
#### SCL
```scl
[1, 2, 2, 3, 3] | RemoveDuplicates
```
#### Expected Output
```scl
[1, 2, 3]
```
### Example 2
#### SCL
```scl
[('a': 1 'b': 2), ('a': 1 'b': 2), ('a': 3 'b': 4)] | ArrayDistinct
```
#### Expected Output
```scl
[('a': 1 'b': 2), ('a': 3 'b': 4)]
```
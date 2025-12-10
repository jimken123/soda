---
title: ArraySort Step | Core SDK Documentation
sidebar_label: ArraySort
description: Reorder an array or entity stream. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArraySort
_Alias_:`ArraySort`, `SortArray`, `Sort`

_Output_:`Array of T`

Reorder an array or entity stream


|Parameter              |Type                                        |Required|Position|Default Value   |Summary                                                                                                                                                                        |
|:----------------------|:------------------------------------------:|:------:|:------:|:--------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Array                  |`array<T>`                                  |✔       |1       |                |The array or entity stream to sort                                                                                                                                             |
|KeySelector<br/>_Using_|`T`                                         |        |2       |Default Ordering|A function that gets the key to sort by. Use this function to select an entity property that will be used for sorting. To sort by multiple properties, concatenate several keys|
|Descending             |`bool` or [SortOrder](../Enums/SortOrder.md)|        |3       |False           |Whether to sort in descending order.                                                                                                                                           |
## Examples
### Example 1
#### SCL
```scl
ArraySort [2, 4, 1, 3] Descending: true
```
#### Expected Output
```scl
[4, 3, 2, 1]
```
### Example 2
#### SCL
```scl
Sort [
  ('type': 'C', 'value': 1)
  ('type': 'A', 'value': 2)
  ('type': 'B', 'value': 3)
] Using: (<>['type'])
```
#### Expected Output
```scl
[('type': "A" 'value': 2), ('type': "B" 'value': 3), ('type': "C" 'value': 1)]
```
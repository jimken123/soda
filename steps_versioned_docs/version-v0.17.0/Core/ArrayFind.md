---
title: ArrayFind Step | Core SDK Documentation
sidebar_label: ArrayFind
description: Gets the first index of an element in an array. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayFind
_Alias_:`ArrayFind`, `FindElement`, `Find`

_Output_:`Int32`

Gets the first index of an element in an array. The index starts at 0. Returns -1 if the element is not present.


|Parameter         |Type      |Required|Position|Summary                 |
|:-----------------|:--------:|:------:|:------:|:-----------------------|
|Array<br/>_In_    |`array<T>`|✔       |1       |The array to check.     |
|Element<br/>_Item_|`T`       |✔       |2       |The element to look for.|
## Examples
### Example 1
#### SCL
```scl
ArrayFind Array: [1, 2, 3] Element: 2
```
#### Expected Output
```scl
1
```
### Example 2
#### SCL
```scl
Find In: ['a', 'b', 'c'] Item: 'a'
```
#### Expected Output
```scl
0
```
### Example 3
#### SCL
```scl
Find In: ['a', 'b', 'c'] Item: 'd'
```
#### Expected Output
```scl
-1
```
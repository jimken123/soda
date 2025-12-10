---
title: ArrayLast Step | Core SDK Documentation
sidebar_label: ArrayLast
description: Gets the last element of an array or entity stream. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayLast
_Alias_:`ArrayLast`, `Last`, `GetLastItem`

_Output_:`T`

Gets the last element of an array or entity stream


|Parameter     |Type      |Required|Position|Summary                             |
|:-------------|:--------:|:------:|:------:|:-----------------------------------|
|Array<br/>_In_|`array<T>`|✔       |1       |The array to get the last element of|
## Examples
### Example 1
#### SCL
```scl
ArrayLast [1,2,3]
```
#### Expected Output
```scl
3
```
### Example 2
#### SCL
```scl
ArrayLast ['a', 'b', 'c']
```
#### Expected Output
```scl
c
```
### Example 3
#### SCL
```scl
ArrayLast [('a': 1), ('a': 2), ('a': 3)]
```
#### Expected Output
```scl
('a': 3)
```
### Example 4
#### SCL
```scl
GetLastItem In: [1,2,3]
```
#### Expected Output
```scl
3
```
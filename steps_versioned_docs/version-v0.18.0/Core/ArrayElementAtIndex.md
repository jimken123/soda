---
title: ArrayElementAtIndex Step | Core SDK Documentation
sidebar_label: ArrayElementAtIndex
description: Gets the array element at a particular index. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayElementAtIndex
_Alias_:`ArrayElementAtIndex`, `FromArray`, `ElementAtIndex`

_Output_:`T`

Gets the array element at a particular index. The first element has an index of 0.


|Parameter             |Type      |Required|Position|Summary                         |
|:---------------------|:--------:|:------:|:------:|:-------------------------------|
|Array                 |`array<T>`|✔       |1       |The array to check.             |
|Index<br/>_GetElement_|`int`     |✔       |2       |The index to get the element at.|
## Examples
#### SCL
```scl
FromArray ['A', 'B', 'C'] GetElement: 1
```
#### Expected Output
```scl
B
```
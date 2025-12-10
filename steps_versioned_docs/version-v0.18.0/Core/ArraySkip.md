---
title: ArraySkip Step | Core SDK Documentation
sidebar_label: ArraySkip
description: Skip the first n elements of an array or entity stream. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArraySkip
_Alias_:`ArraySkip`, `Skip`

_Output_:`Array of T`

Skip the first n elements of an array or entity stream


|Parameter     |Type      |Required|Position|Summary                                |
|:-------------|:--------:|:------:|:------:|:--------------------------------------|
|Array<br/>_In_|`array<T>`|✔       |1       |The array to skip elements from        |
|Count         |`int`     |✔       |2       |The number of elements/entities to skip|
## Examples
### Example 1
#### SCL
```scl
ArraySkip [1, 2, 3] 2
```
#### Expected Output
```scl
[3]
```
### Example 2
#### SCL
```scl
Skip In: [1, 2, 3, 4, 5] Count: 3
```
#### Expected Output
```scl
[4, 5]
```
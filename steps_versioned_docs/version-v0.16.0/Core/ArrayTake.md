---
title: ArrayTake Step | Core SDK Documentation
sidebar_label: ArrayTake
description: Take the first n elements of an array or entity stream. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayTake
_Alias_:`ArrayTake`, `Take`

_Output_:`Array of T`

Take the first n elements of an array or entity stream


|Parameter       |Type      |Required|Position|Summary                                         |
|:---------------|:--------:|:------:|:------:|:-----------------------------------------------|
|Array<br/>_From_|`array<T>`|✔       |1       |The array or entity stream to take elements from|
|Count           |`int`     |✔       |2       |The number of elements/entities to take         |
## Examples
### Example 1
#### SCL
```scl
ArrayTake [1, 2, 3] 2
```
#### Expected Output
```scl
[1, 2]
```
### Example 2
#### SCL
```scl
Take From: [1, 2, 3, 4, 5] Count: 3
```
#### Expected Output
```scl
[1, 2, 3]
```
---
title: ArrayReverse Step | Core SDK Documentation
sidebar_label: ArrayReverse
description: Reverse the order of elements in an array. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayReverse
_Alias_:`ArrayReverse`

_Output_:`Array of T`

Reverse the order of elements in an array


|Parameter|Type      |Required|Position|Summary             |
|:--------|:--------:|:------:|:------:|:-------------------|
|Array    |`array<T>`|✔       |1       |The array to reverse|
## Examples
#### SCL
```scl
ArrayReverse [1, 2, 3]
```
#### Expected Output
```scl
[3, 2, 1]
```
---
title: ArrayConcat Step | Core SDK Documentation
sidebar_label: ArrayConcat
description: Concatenates arrays or streams of entities. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayConcat
_Alias_:`ArrayConcat`, `Combine`

_Output_:`Array of T`

Concatenates arrays or streams of entities


|Parameter|Type             |Required|Position|Summary                  |
|:--------|:---------------:|:------:|:------:|:------------------------|
|Arrays   |`array<array<T>>`|✔       |1       |The arrays to concatenate|
## Examples
### Example 1
#### SCL
```scl
[1,2,3] + [4,5,6]
```
#### Expected Output
```scl
[1, 2, 3, 4, 5, 6]
```
### Example 2
#### SCL
```scl
ArrayConcat [[1,2,3], [4,5,6]]
```
#### Expected Output
```scl
[1, 2, 3, 4, 5, 6]
```
### Example 3
#### SCL
```scl
Combine Arrays: [[1, 2, 3], [4, 5, 6]]
```
#### Expected Output
```scl
[1, 2, 3, 4, 5, 6]
```
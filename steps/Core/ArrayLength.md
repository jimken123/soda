---
title: ArrayLength Step | Core SDK Documentation
sidebar_label: ArrayLength
description: Counts the elements in an array or entities in an entity stream.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayLength
_Alias_:`ArrayLength`, `Length`

_Output_:`Int32`

Counts the elements in an array or entities in an entity stream.


|Parameter     |Type      |Required|Position|Summary            |
|:-------------|:--------:|:------:|:------:|:------------------|
|Array<br/>_Of_|`array<T>`|✔       |1       |The array to count.|
## Examples
### Example 1
#### SCL
```scl
ArrayLength [1,2,3]
```
#### Expected Output
```scl
3
```
### Example 2
#### SCL
```scl
Length Of: [1,2,3]
```
#### Expected Output
```scl
3
```
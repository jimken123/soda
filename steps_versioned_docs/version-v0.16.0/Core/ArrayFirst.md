---
title: ArrayFirst Step | Core SDK Documentation
sidebar_label: ArrayFirst
description: Gets the first element of an array or entity stream. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayFirst
_Alias_:`ArrayFirst`, `First`, `GetFirstItem`

_Output_:`T`

Gets the first element of an array or entity stream


|Parameter     |Type      |Required|Position|Summary                              |
|:-------------|:--------:|:------:|:------:|:------------------------------------|
|Array<br/>_In_|`array<T>`|✔       |1       |The array to get the first element of|
## Examples
### Example 1
#### SCL
```scl
ArrayFirst [1,2,3]
```
#### Expected Output
```scl
1
```
### Example 2
#### SCL
```scl
ArrayFirst ['a', 'b', 'c']
```
#### Expected Output
```scl
a
```
### Example 3
#### SCL
```scl
ArrayFirst [('a': 1), ('a': 2), ('a': 3)]
```
#### Expected Output
```scl
('a': 1)
```
### Example 4
#### SCL
```scl
GetFirstItem In: [1,2,3]
```
#### Expected Output
```scl
1
```
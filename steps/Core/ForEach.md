---
title: ForEach Step | Core SDK Documentation
sidebar_label: ForEach
description: Do an action for each element in an array. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ForEach
_Alias_:`ForEach`, `EntityForEach`, `ForEachItem`

_Output_:`Unit`

Do an action for each element in an array


|Parameter      |Type      |Required|Position|Summary                                   |
|:--------------|:--------:|:------:|:------:|:-----------------------------------------|
|Array<br/>_In_ |`array<T>`|✔       |1       |The array or entity stream to iterate over|
|Action<br/>_Do_|`T`       |✔       |2       |The action to perform on each iteration   |
## Examples
### Example 1
#### SCL
```scl
ForEach [1, 2, 3] Action: (Log <item>)
```
#### Expected Logs
```
1
2
3
```
### Example 2
#### SCL
```scl
ForEachItem In: [1, 2, 3] Do: (Log <item>)
```
#### Expected Logs
```
1
2
3
```
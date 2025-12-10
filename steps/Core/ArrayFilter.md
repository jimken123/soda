---
title: ArrayFilter Step | Core SDK Documentation
sidebar_label: ArrayFilter
description: Filter an array or entity stream using a conditional statement. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayFilter
_Alias_:`ArrayFilter`, `FilterArray`, `Filter`

_Output_:``Array<T>``

Filter an array or entity stream using a conditional statement


|Parameter            |Type      |Required|Position|Summary                                                         |
|:--------------------|:--------:|:------:|:------:|:---------------------------------------------------------------|
|Array                |`array<T>`|✔       |1       |The array to filter                                             |
|Predicate<br/>_Using_|`T`       |✔       |2       |A function that determines whether an entity should be included.|
## Examples
### Example 1
#### SCL
```scl
ArrayFilter [('value': 'A'), ('value': 'B'), ('value': 'C')] Predicate: (<>['value'] != 'B')
```
#### Expected Output
```scl
[('value': "A"), ('value': "C")]
```
### Example 2
#### SCL
```scl
Filter <MyCsvFile> Using: (<>['column1'] == 'TypeA')
```
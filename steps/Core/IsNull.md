---
title: IsNull Step | Core SDK Documentation
sidebar_label: IsNull
description: Checks if a step returns null. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# IsNull
_Alias_:`IsNull`

_Output_:`Boolean`

Checks if a step returns null


|Parameter|Type|Required|Position|Summary                    |
|:--------|:--:|:------:|:------:|:--------------------------|
|Value    |`T` |✔       |1       |The value to check for null|
## Examples
### Example 1
#### SCL
```scl
IsNull Null
```
#### Expected Output
```scl
True
```
### Example 2
#### SCL
```scl
IsNull 1
```
#### Expected Output
```scl
False
```
### Example 3
#### SCL
```scl
IsNull (a: Null)['a']
```
#### Expected Output
```scl
True
```
### Example 4
#### SCL
```scl
IsNull (a: 1)['a']
```
#### Expected Output
```scl
False
```
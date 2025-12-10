---
title: And Step | Core SDK Documentation
sidebar_label: And
description: Returns true if all terms are true. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# And
_Alias_:`And`

_Output_:`SCLBool`

Returns true if all terms are true


|Parameter|Type         |Required|Position|Summary                |
|:--------|:-----------:|:------:|:------:|:----------------------|
|Terms    |`array<bool>`|✔       |1       |The terms to operate on|
## Examples
### Example 1
#### SCL
```scl
true && true
```
#### Expected Output
```scl
True
```
### Example 2
#### SCL
```scl
true && false
```
#### Expected Output
```scl
False
```
### Example 3
#### SCL
```scl
true && true && true
```
#### Expected Output
```scl
True
```
### Example 4
#### SCL
```scl
(3 > 2) && (2 > 1)
```
#### Expected Output
```scl
True
```
---
title: Not Step | Core SDK Documentation
sidebar_label: Not
description: Negation of a boolean value.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Not
_Alias_:`Not`

_Output_:`SCLBool`

Negation of a boolean value.


|Parameter|Type  |Required|Position|Summary             |
|:--------|:----:|:------:|:------:|:-------------------|
|Boolean  |`bool`|✔       |1       |The value to negate.|
## Examples
### Example 1
#### SCL
```scl
Not true
```
#### Expected Output
```scl
False
```
### Example 2
#### SCL
```scl
Not false
```
#### Expected Output
```scl
True
```
### Example 3
#### SCL
```scl
Not 1 == 1
```
#### Expected Output
```scl
False
```
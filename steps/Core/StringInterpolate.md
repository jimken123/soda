---
title: StringInterpolate Step | Core SDK Documentation
sidebar_label: StringInterpolate
description: Joins strings. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringInterpolate
_Alias_:`StringInterpolate`

_Output_:`StringStream`

Joins strings. Supports string interpolation. To use string interpolation, the string must be enclosed in double quotes and prefixed with a dollar-sign ($). Then, anything in curly brackets { and } will be evaluated as SCL.


|Parameter|Type         |Required|Position|Summary            |
|:--------|:-----------:|:------:|:------:|:------------------|
|Strings  |List<`IStep`>|✔       |1       |The strings to join|
## Examples
### Example 1
#### SCL
```scl
$"The answer is {6 + (6 ^ 2)}"
```
#### Expected Output
```scl
The answer is 42
```
### Example 2
#### SCL
```scl
$"The answer is {}???"
```
#### Expected Output
```scl
The answer is ???
```
### Example 3
#### SCL
```scl
$"(a:{1}, b:{}, c:{3}, d:{}, e:{5})"
```
#### Expected Output
```scl
(a:1, b:, c:3, d:, e:5)
```
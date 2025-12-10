---
title: Repeat Step | Core SDK Documentation
sidebar_label: Repeat
description: Repeat a step a set number of times.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Repeat
_Alias_:`Repeat`, `DoXTimes`

_Output_:`Unit`

Repeat a step a set number of times.


|Parameter    |Type  |Required|Position|Summary                                   |
|:------------|:----:|:------:|:------:|:-----------------------------------------|
|Action       |`unit`|✔       |1       |The action to perform repeatedly.         |
|Times<br/>_X_|`int` |✔       |2       |The number of times to perform the action.|
## Examples
### Example 1
#### SCL
```scl
Repeat Action: (Log 1) Times: 3
```
#### Expected Logs
```
1
1
1
```
### Example 2
#### SCL
```scl
DoXTimes (Log 1) X: 3
```
#### Expected Logs
```
1
1
1
```
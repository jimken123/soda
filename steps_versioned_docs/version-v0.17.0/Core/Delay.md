---
title: Delay Step | Core SDK Documentation
sidebar_label: Delay
description: Delay for a specified amount of time. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Delay
_Alias_:`Delay`, `Sleep`

_Output_:`Unit`

Delay for a specified amount of time


|Parameter                      |Type |Required|Position|Summary                            |
|:------------------------------|:---:|:------:|:------:|:----------------------------------|
|Milliseconds<br/>_ms_<br/>_For_|`int`|✔       |1       |The number of milliseconds to delay|
## Examples
### Example 1
Delay 10 milliseconds.
#### SCL
```scl
Delay 10
```
### Example 2
Delay for 5 milliseconds.
#### SCL
```scl
Sleep For: 5
```
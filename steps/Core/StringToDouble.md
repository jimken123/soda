---
title: StringToDouble Step | Core SDK Documentation
sidebar_label: StringToDouble
description: Converts a string to a double. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringToDouble
_Alias_:`StringToDouble`, `ToDouble`

_Output_:`SCLDouble`

Converts a string to a double


|Parameter          |Type    |Required|Position|Summary                            |
|:------------------|:------:|:------:|:------:|:----------------------------------|
|Double<br/>_String_|`string`|✔       |1       |The string to convert to an integer|
## Examples
#### SCL
```scl
StringToDouble '123.45'
```
#### Expected Output
```scl
123.45
```
---
title: StringToInt Step | Core SDK Documentation
sidebar_label: StringToInt
description: Converts a string to an integer. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringToInt
_Alias_:`StringToInt`, `ToInt`

_Output_:`SCLInt`

Converts a string to an integer


|Parameter           |Type    |Required|Position|Summary                            |
|:-------------------|:------:|:------:|:------:|:----------------------------------|
|Integer<br/>_String_|`string`|✔       |1       |The string to convert to an integer|
## Examples
#### SCL
```scl
StringToInt '123'
```
#### Expected Output
```scl
123
```
---
title: StringSubstring Step | Core SDK Documentation
sidebar_label: StringSubstring
description: Gets a substring from a string.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringSubstring
_Alias_:`StringSubstring`, `GetSubstring`

_Output_:`StringStream`

Gets a substring from a string.


|Parameter        |Type    |Required|Position|Default Value|Summary                                |
|:----------------|:------:|:------:|:------:|:-----------:|:--------------------------------------|
|String<br/>_From_|`string`|✔       |1       |             |The string to extract a substring from.|
|Length           |`int`   |✔       |2       |             |The length of the substring to extract.|
|Index            |`int`   |        |3       |0            |The index.                             |
## Examples
### Example 1
#### SCL
```scl
StringSubstring 'hello world!' Index: 6 Length: 5
```
#### Expected Output
```scl
world
```
### Example 2
#### SCL
```scl
GetSubstring From: 'hello world!' Length: 5
```
#### Expected Output
```scl
hello
```
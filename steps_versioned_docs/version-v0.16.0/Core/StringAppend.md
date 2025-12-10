---
title: StringAppend Step | Core SDK Documentation
sidebar_label: StringAppend
description: Appends a string to an existing string variable.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringAppend
_Alias_:`StringAppend`, `AppendString`

_Output_:`Unit`

Appends a string to an existing string variable.


|Parameter|Type          |Required|Position|Summary                   |
|:--------|:------------:|:------:|:------:|:-------------------------|
|Variable |`VariableName`|✔       |1       |The variable to append to.|
|String   |`string`      |✔       |2       |The string to append.     |
## Examples
#### SCL
```scl
- <var> = 'hello'
- StringAppend <var> ' world'
- Log <var>
```
#### Expected Logs
```
hello world
```
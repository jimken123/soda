---
title: StringToBool Step | Core SDK Documentation
sidebar_label: StringToBool
description: Converts a string to a boolean. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringToBool
_Alias_:`StringToBool`, `ToBool`

_Output_:`SCLBool`

Converts a string to a boolean


|Parameter           |Type    |Required|Position|Summary                            |
|:-------------------|:------:|:------:|:------:|:----------------------------------|
|Boolean<br/>_String_|`string`|✔       |1       |The string to convert to an integer|
## Examples
### Example 1
#### SCL
```scl
StringToBool 'true'
```
#### Expected Output
```scl
True
```
### Example 2
#### SCL
```scl
StringToBool 'false'
```
#### Expected Output
```scl
False
```
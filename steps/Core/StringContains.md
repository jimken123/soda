---
title: StringContains Step | Core SDK Documentation
sidebar_label: StringContains
description: Returns true if the String contains the substring.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringContains
_Alias_:`StringContains`, `DoesString`, `DoesStringContain`

_Output_:`SCLBool`

Returns true if the String contains the substring.


|Parameter              |Type    |Required|Position|Default Value|Summary                                       |
|:----------------------|:------:|:------:|:------:|:-----------:|:---------------------------------------------|
|String                 |`string`|✔       |1       |             |The superstring to check                      |
|Substring<br/>_Contain_|`string`|✔       |2       |             |The substring to find                         |
|IgnoreCase             |`bool`  |        |3       |False        |Whether to ignore case when comparing strings.|
## Examples
### Example 1
#### SCL
```scl
StringContains String: 'hello there' Substring: 'there'
```
#### Expected Output
```scl
True
```
### Example 2
#### SCL
```scl
StringContains String: 'hello there' Substring: 'world'
```
#### Expected Output
```scl
False
```
### Example 3
#### SCL
```scl
DoesString 'hello there' Contain: 'ello'
```
#### Expected Output
```scl
True
```
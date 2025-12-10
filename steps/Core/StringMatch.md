---
title: StringMatch Step | Core SDK Documentation
sidebar_label: StringMatch
description: Returns true if a string is matched by a particular regular expression. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringMatch
_Alias_:`StringMatch`, `IsMatch`, `RegexMatch`

_Output_:`SCLBool`

Returns true if a string is matched by a particular regular expression


|Parameter          |Type    |Required|Position|Default Value|Summary                                             |
|:------------------|:------:|:------:|:------:|:-----------:|:---------------------------------------------------|
|String             |`string`|✔       |1       |             |The string to match                                 |
|Pattern<br/>_Regex_|`string`|✔       |2       |             |The regular expression pattern. Uses the .net flavor|
|IgnoreCase         |`bool`  |        |        |False        |Whether the regex should ignore case.               |
## Examples
### Example 1
#### SCL
```scl
StringMatch String: 'aaaabbbbccc' Pattern: 'a+b+c+'
```
#### Expected Output
```scl
True
```
### Example 2
#### SCL
```scl
IsMatch String: 'abracadabra' Regex: 'ab\w+?ab'
```
#### Expected Output
```scl
True
```
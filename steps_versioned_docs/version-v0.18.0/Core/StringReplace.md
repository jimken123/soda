---
title: StringReplace Step | Core SDK Documentation
sidebar_label: StringReplace
description: Replace every regex match in the string with the result of a particular function. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringReplace
_Alias_:`StringReplace`, `RegexReplace`

_Output_:`StringStream`

Replace every regex match in the string with the result of a particular function


|Parameter         |Type    |Required|Position|Default Value                         |Summary                                                          |
|:-----------------|:------:|:------:|:------:|:------------------------------------:|:----------------------------------------------------------------|
|String<br/>_In_   |`string`|✔       |1       |                                      |The string to match                                              |
|Pattern<br/>_Find_|`string`|✔       |2       |                                      |The regular expression pattern. Uses the .net flavor             |
|Replace           |`string`|        |3       |Either this or 'Function' must be set.|The replacement string. Use $1, $2 etc. to replace matched groups|
|Function          |`string`|        |        |Either this or 'Replace' must be set. |A function to take the regex match and return the new string     |
|IgnoreCase        |`bool`  |        |        |False                                 |Whether the regex should ignore case.                            |
## Examples
### Example 1
Basic Replacement
#### SCL
```scl
StringReplace String: 'number 1' Find: '1' Replace: 'one'
```
#### Expected Output
```scl
number one
```
### Example 2
Replace using a function
#### SCL
```scl
StringReplace 'number 1' '\w+' Function: (stringToCase <> TextCase.Upper)
```
#### Expected Output
```scl
NUMBER 1
```
### Example 3
Replace captured groups
#### SCL
```scl
StringReplace 'number 13' '(\w+)\s+(\d+)' '$2 was your $1'
```
#### Expected Output
```scl
13 was your number
```
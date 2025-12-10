---
title: StringFind Step | Core SDK Documentation
sidebar_label: StringFind
description: Gets the index of the first instance of a substring in a string. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringFind
_Alias_:`StringFind`, `IndexOfSubstring`, `FindInstance`

_Output_:`SCLInt`

Gets the index of the first instance of a substring in a string. The index starts at 0. Returns -1 if the substring is not present.


|Parameter                     |Type    |Required|Position|Summary               |
|:-----------------------------|:------:|:------:|:------:|:---------------------|
|String<br/>_In_<br/>_InString_|`string`|✔       |1       |The string to check.  |
|SubString<br/>_Of_            |`string`|✔       |2       |The substring to find.|
## Examples
### Example 1
#### SCL
```scl
StringFind SubString: 'ello' InString: 'hello hello!'
```
#### Expected Output
```scl
1
```
### Example 2
#### SCL
```scl
FindInstance Of: 'ello' In: 'hello hello!'
```
#### Expected Output
```scl
1
```
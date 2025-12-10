---
title: CharAtIndex Step | Core SDK Documentation
sidebar_label: CharAtIndex
description: Gets the letter that appears at a specific index. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# CharAtIndex
_Alias_:`CharAtIndex`, `GetLetter`

_Output_:`StringStream`

Gets the letter that appears at a specific index. First letter is at index 0.


|Parameter          |Type    |Required|Position|Summary                                |
|:------------------|:------:|:------:|:------:|:--------------------------------------|
|String<br/>_From_  |`string`|✔       |1       |The string to extract a substring from.|
|Index<br/>_AtIndex_|`int`   |✔       |2       |The index.                             |
## Examples
### Example 1
#### SCL
```scl
CharAtIndex 'hello' 1
```
#### Expected Output
```scl
e
```
### Example 2
#### SCL
```scl
GetLetter From: 'Bye!' AtIndex: 0
```
#### Expected Output
```scl
B
```
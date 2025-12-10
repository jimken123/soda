---
title: StringToCase Step | Core SDK Documentation
sidebar_label: StringToCase
description: Converts a string to a particular case.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringToCase
_Alias_:`StringToCase`, `ChangeCase`, `ToCase`

_Output_:`StringStream`

Converts a string to a particular case.


|Parameter      |Type                            |Required|Position|Summary                          |
|:--------------|:------------------------------:|:------:|:------:|:--------------------------------|
|String<br/>_Of_|`string`                        |✔       |1       |The string to change the case of.|
|Case<br/>_To_  |[TextCase](../Enums/TextCase.md)|✔       |2       |The case to change to.           |
## Examples
### Example 1
#### SCL
```scl
StringToCase String: 'string to change' Case: TextCase.Title
```
#### Expected Output
```scl
String To Change
```
### Example 2
#### SCL
```scl
ChangeCase Of: 'string to change' To: 'Upper'
```
#### Expected Output
```scl
STRING TO CHANGE
```
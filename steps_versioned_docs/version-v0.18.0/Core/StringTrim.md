---
title: StringTrim Step | Core SDK Documentation
sidebar_label: StringTrim
description: Trims a string, removing whitespace from the `TrimSide`.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringTrim
_Alias_:`StringTrim`, `TrimString`

_Output_:`StringStream`

Trims a string, removing whitespace from the `TrimSide`.


|Parameter|Type                            |Required|Position|Default Value|Summary                          |
|:--------|:------------------------------:|:------:|:------:|:-----------:|:--------------------------------|
|String   |`string`                        |✔       |1       |             |The string to change the case of.|
|Side     |[TrimSide](../Enums/TrimSide.md)|        |2       |Both         |The side to trim.                |
## Examples
### Example 1
#### SCL
```scl
StringTrim String: '  spaces '
```
#### Expected Output
```scl
spaces
```
### Example 2
#### SCL
```scl
TrimString '  spaces ' Side: TrimSide.Start
```
#### Expected Output
```scl
spaces 
```
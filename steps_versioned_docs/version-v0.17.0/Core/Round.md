---
title: Round Step | Core SDK Documentation
sidebar_label: Round
description: Round an SCL double to a fixed number of decimal places. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Round
_Alias_:`Round`

_Output_:`SCLDouble`

Round an SCL double to a fixed number of decimal places


|Parameter                    |Type    |Required|Position|Default Value|Summary                                 |
|:----------------------------|:------:|:------:|:------:|:-----------:|:---------------------------------------|
|Value<br/>_Number_           |`double`|✔       |1       |             |The value to round                      |
|Precision<br/>_DecimalPlaces_|`int`   |        |2       |3            |The number of decimal places to round to|
## Examples
### Example 1
#### SCL
```scl
Round 3.1415926535
```
#### Expected Output
```scl
3.142
```
### Example 2
#### SCL
```scl
Round 3.1415926535 5
```
#### Expected Output
```scl
3.14159
```
### Example 3
#### SCL
```scl
Round 3.1415926535 0
```
#### Expected Output
```scl
3
```
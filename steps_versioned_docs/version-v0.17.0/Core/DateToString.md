---
title: DateToString Step | Core SDK Documentation
sidebar_label: DateToString
description: Converts a date to the specified format, yyyy/MM/dd HH:mm:ss by default. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# DateToString
_Alias_:`DateToString`, `DateNow`, `ConvertDateToString`, `FormatDate`

_Output_:`StringStream`

Converts a date to the specified format, yyyy/MM/dd HH:mm:ss by default. If no date is specified, uses the current date and time.


|Parameter      |Type      |Required|Position|Default Value      |Example|Summary                                              |
|:--------------|:--------:|:------:|:------:|:-----------------:|:-----:|:----------------------------------------------------|
|Date           |`dateTime`|        |1       |DateTime.Now       |       |The date and time to convert to the specified format.|
|Format<br/>_As_|`string`  |        |2       |yyyy/MM/dd HH:mm:ss|O      |The output format to use for the date.               |
## Examples
### Example 1
#### SCL
```scl
DateToString 1990-01-06T09:15:00
```
#### Expected Output
```scl
1990/01/06 09:15:00
```
### Example 2
#### SCL
```scl
DateToString 1990-01-06T09:15:00 'yyyy/MM/dd'
```
#### Expected Output
```scl
1990/01/06
```
### Example 3
#### SCL
```scl
FormatDate 2022-01-01T01:01:01 As: 'HH:mm:ss'
```
#### Expected Output
```scl
01:01:01
```
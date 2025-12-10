---
title: StringToDate Step | Core SDK Documentation
sidebar_label: StringToDate
description: Converts a date to the specified format, yyyyMMddHHmm by default. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringToDate
_Alias_:`StringToDate`, `ConvertStringToDate`, `ToDate`

_Output_:`SCLDateTime`

Converts a date to the specified format, yyyyMMddHHmm by default. If no date is specified, returns the current time.


|Parameter               |Type    |Required|Position|Default Value                        |Example            |Summary                                                                                |
|:-----------------------|:------:|:------:|:------:|:-----------------------------------:|:-----------------:|:--------------------------------------------------------------------------------------|
|Date<br/>_String_       |`string`|✔       |1       |                                     |2020/11/22 20:55:11|The string to convert to DateTime                                                      |
|InputFormat<br/>_Format_|`string`|        |2       |Will use DateTime to try and convert.|yyyy/MM/dd HH:mm:ss|The input format to use for conversion. If not set, will use DateTime.Parse by default.|
|Culture                 |`string`|        |3       |Current culture                      |en-GB              |The culture to use for date conversion. Default is current culture.                    |
## Examples
#### SCL
```scl
StringToDate '2020/10/20 20:30:40'
```
#### Expected Output
```scl
2020-10-20T20:30:40.0000000
```
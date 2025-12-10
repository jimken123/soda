---
title: Log Step | Core SDK Documentation
sidebar_label: Log
description: Write a value to the logs. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Log
_Alias_:`Log`

_Output_:`Unit`

Write a value to the logs


|Parameter           |Type                            |Required|Position|Default Value|Summary               |
|:-------------------|:------------------------------:|:------:|:------:|:-----------:|:---------------------|
|Value<br/>_Message_ |`IStep`                         |✔       |1       |             |The Value to Log.     |
|Severity<br/>_Level_|[Severity](../Enums/Severity.md)|        |2       |Information  |Log severity or level.|
## Examples
### Example 1
Logs 'Hello' using the configured provider.
#### SCL
```scl
Log 'Hello'
```
#### Expected Logs
```
Hello
```
### Example 2
Logs 'Help!' with severity of warning.
#### SCL
```scl
Log Message: 'Help!' Severity: Severity.Warning
```
#### Expected Logs
```
Help!
```
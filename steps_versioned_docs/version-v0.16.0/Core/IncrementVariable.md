---
title: IncrementVariable Step | Core SDK Documentation
sidebar_label: IncrementVariable
description: Increment an integer variable by a particular amount. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# IncrementVariable
_Alias_:`IncrementVariable`, `Increment`

_Output_:`Unit`

Increment an integer variable by a particular amount


|Parameter      |Type          |Required|Position|Default Value|Summary                    |
|:--------------|:------------:|:------:|:------:|:-----------:|:--------------------------|
|Variable       |`VariableName`|✔       |1       |             |The variable to increment. |
|Amount<br/>_By_|`int`         |        |2       |1            |The amount to increment by.|
## Examples
### Example 1
#### SCL
```scl
- <var> = 1
- IncrementVariable Variable: <var> Amount: 2
- Log <var>
```
#### Expected Logs
```
3
```
### Example 2
#### SCL
```scl
- <var> = 1
- Increment <var> By: 2
- Log <var>
```
#### Expected Logs
```
3
```
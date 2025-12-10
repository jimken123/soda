---
title: StandardErrorWrite Step | Core SDK Documentation
sidebar_label: StandardErrorWrite
description: Writes to the console standard error. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StandardErrorWrite
_Alias_:`StandardErrorWrite`, `ToStandardError`, `WriteStandardError`, `ToStdErr`, `WriteStdErr`, `StdErrWrite`

_Output_:`Unit`

Writes to the console standard error


|Parameter|Type    |Required|Position|Summary          |
|:--------|:------:|:------:|:------:|:----------------|
|Data     |`string`|✔       |1       |The data to write|
## Examples
Writes to the Standard Error
#### SCL
```scl
StandardErrorWrite 'Something Went Wrong'
```
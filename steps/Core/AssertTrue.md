---
title: AssertTrue Step | Core SDK Documentation
sidebar_label: AssertTrue
description: Returns an error if the nested step does not return true.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# AssertTrue
_Alias_:`AssertTrue`

_Output_:`Unit`

Returns an error if the nested step does not return true.


|Parameter|Type  |Required|Position|Summary          |
|:--------|:----:|:------:|:------:|:----------------|
|Boolean  |`bool`|✔       |1       |The bool to test.|
## Examples
#### SCL
```scl
AssertTrue ((2 + 2) == 4)
```
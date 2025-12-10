---
title: AssertError Step | Core SDK Documentation
sidebar_label: AssertError
description: Returns success if the ValueIf step returns an error and a failure otherwise.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# AssertError
_Alias_:`AssertError`

_Output_:`Unit`

Returns success if the ValueIf step returns an error and a failure otherwise.


|Parameter|Type  |Required|Position|Summary          |
|:--------|:----:|:------:|:------:|:----------------|
|Step     |`unit`|✔       |1       |The step to test.|
## Examples
#### SCL
```scl
AssertError (log (1 / 0))
```
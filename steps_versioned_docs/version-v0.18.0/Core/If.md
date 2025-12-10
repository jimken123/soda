---
title: If Step | Core SDK Documentation
sidebar_label: If
description: Executes a statement if a condition is true.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# If
_Alias_:`If`, `ValueIf`

_Output_:`T`

Executes a statement if a condition is true.


|Parameter|Type  |Required|Position|Default Value    |Summary                                             |
|:--------|:----:|:------:|:------:|:---------------:|:---------------------------------------------------|
|Condition|`bool`|✔       |1       |                 |Whether to follow the Then Branch                   |
|Then     |`T`   |✔       |2       |                 |The Consequent. Returned if the condition is true.  |
|Else     |`T`   |        |3       |The default value|The Alternative. Returned if the condition is false.|
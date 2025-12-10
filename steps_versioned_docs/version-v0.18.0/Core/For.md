---
title: For Step | Core SDK Documentation
sidebar_label: For
description: Do an action for each value of <i> in a range.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# For
_Alias_:`For`

_Output_:`Unit`

Do an action for each value of &lt;i&gt; in a range.


|Parameter      |Type |Required|Position|Default Value|Summary                                   |
|:--------------|:---:|:------:|:------:|:-----------:|:-----------------------------------------|
|From           |`int`|✔       |1       |             |The first value of the variable to use.   |
|To             |`int`|✔       |2       |             |The highest value of the variable to use  |
|Action<br/>_Do_|`int`|✔       |3       |             |The action to perform repeatedly.         |
|Increment      |`int`|        |4       |1            |The amount to increment by each iteration.|
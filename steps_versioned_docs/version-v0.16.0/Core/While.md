---
title: While Step | Core SDK Documentation
sidebar_label: While
description: Repeat an action while the condition is met.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# While
_Alias_:`While`

_Output_:`Unit`

Repeat an action while the condition is met.


|Parameter      |Type  |Required|Position|Summary                                             |
|:--------------|:----:|:------:|:------:|:---------------------------------------------------|
|Condition      |`bool`|✔       |1       |The condition to check before performing the action.|
|Action<br/>_Do_|`unit`|✔       |2       |The action to perform repeatedly.                   |
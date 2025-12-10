---
title: StringJoin Step | Core SDK Documentation
sidebar_label: StringJoin
description: Join strings with a delimiter.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# StringJoin
_Alias_:`StringJoin`, `JoinStrings`

_Output_:`StringStream`

Join strings with a delimiter.


|Parameter            |Type           |Required|Position|Default Value|Summary              |
|:--------------------|:-------------:|:------:|:------:|:-----------:|:--------------------|
|Strings              |`array<string>`|✔       |1       |             |The string to join.  |
|Delimiter<br/>_Using_|`string`       |        |2       |Empty String |The delimiter to use.|
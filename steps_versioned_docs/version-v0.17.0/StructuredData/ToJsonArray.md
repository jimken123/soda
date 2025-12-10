---
title: ToJsonArray Step | Structured Data Connector Documentation
sidebar_label: ToJsonArray
description: Write entities to a stream in Json format.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, StructuredData]
hide_title: true
hide_table_of_contents: true
---

# ToJsonArray
_Alias_:`ToJsonArray`

_Output_:`StringStream`

Write entities to a stream in Json format.


|Parameter   |Type           |Required|Position|Default Value|Summary                             |
|:-----------|:-------------:|:------:|:------:|:-----------:|:-----------------------------------|
|Entities    |`array<entity>`|✔       |1       |             |The entities to write.              |
|FormatOutput|`bool`         |        |2       |true         |Whether to format to the Json output|
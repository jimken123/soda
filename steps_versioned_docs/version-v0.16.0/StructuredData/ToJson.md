---
title: ToJson Step | Structured Data Connector Documentation
sidebar_label: ToJson
description: Writes an entity to a stream in JSON format. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, StructuredData]
hide_title: true
hide_table_of_contents: true
---

# ToJson
_Alias_:`ToJson`

_Output_:`StringStream`

Writes an entity to a stream in JSON format


|Parameter   |Type    |Required|Position|Default Value|Summary                             |
|:-----------|:------:|:------:|:------:|:-----------:|:-----------------------------------|
|Entity      |`entity`|✔       |1       |             |The entity to write.                |
|FormatOutput|`bool`  |        |2       |true         |Whether to indent to the Json output|
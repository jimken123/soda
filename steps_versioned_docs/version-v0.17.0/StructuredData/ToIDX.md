---
title: ToIDX Step | Structured Data Connector Documentation
sidebar_label: ToIDX
description: Write an entity to a stream in IDX format.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, StructuredData]
hide_title: true
hide_table_of_contents: true
---

# ToIDX
_Alias_:`ToIDX`

_Output_:`StringStream`

Write an entity to a stream in IDX format.


|Parameter        |Type    |Required|Position|Default Value        |Summary                                                 |
|:----------------|:------:|:------:|:------:|:-------------------:|:-------------------------------------------------------|
|Entity           |`entity`|✔       |1       |                     |The entity to write                                     |
|ConvertToDocument|`bool`  |        |2       |Convert to a document|True to convert to a document. False to convert to data.|
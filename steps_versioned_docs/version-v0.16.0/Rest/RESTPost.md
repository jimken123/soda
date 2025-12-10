---
title: RESTPost Step | REST Connector Documentation
sidebar_label: RESTPost
description: Create a REST resource and return the id of the created resource. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Rest]
hide_title: true
hide_table_of_contents: true
---

# RESTPost
_Alias_:`RESTPost`

_Output_:`StringStream`

Create a REST resource and return the id of the created resource


|Parameter  |Type    |Required|Position|Default Value        |Summary                   |
|:----------|:------:|:------:|:------:|:-------------------:|:-------------------------|
|BaseURL    |`string`|✔       |1       |                     |The base url              |
|RelativeURL|`string`|✔       |2       |                     |The relative url          |
|Entity     |`entity`|✔       |3       |                     |The Entity to create      |
|Headers    |`entity`|        |        |No Additional Headers|Additional headers to send|
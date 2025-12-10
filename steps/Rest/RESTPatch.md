---
title: RESTPatch Step | REST Connector Documentation
sidebar_label: RESTPatch
description: Executes a REST Patch request. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Rest]
hide_title: true
hide_table_of_contents: true
---

# RESTPatch
_Alias_:`RESTPatch`

_Output_:`Unit`

Executes a REST Patch request


|Parameter  |Type    |Required|Position|Default Value        |Summary                   |
|:----------|:------:|:------:|:------:|:-------------------:|:-------------------------|
|BaseURL    |`string`|✔       |1       |                     |The base url              |
|RelativeURL|`string`|✔       |2       |                     |The relative url          |
|Entity     |`entity`|✔       |3       |                     |The Entity to create      |
|Headers    |`entity`|        |        |No Additional Headers|Additional headers to send|
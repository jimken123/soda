---
title: RESTGetStream Step | REST Connector Documentation
sidebar_label: RESTGetStream
description: Get data from a REST service. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Rest]
hide_title: true
hide_table_of_contents: true
---

# RESTGetStream
_Alias_:`RESTGetStream`

_Output_:`StringStream`

Get data from a REST service


|Parameter  |Type    |Required|Position|Default Value        |Summary                   |
|:----------|:------:|:------:|:------:|:-------------------:|:-------------------------|
|BaseURL    |`string`|✔       |1       |                     |The base url              |
|RelativeURL|`string`|✔       |2       |                     |The relative url          |
|Headers    |`entity`|        |        |No Additional Headers|Additional headers to send|
---
title: FromSinger Step | Singer Target Documentation
sidebar_label: FromSinger
description: Extracts the data from a Singer Tap and converts it to entities. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Singer]
hide_title: true
hide_table_of_contents: true
---

# FromSinger
_Alias_:`FromSinger`

_Output_:`Array<T>`

Extracts the data from a Singer Tap and converts it to entities


|Parameter  |Type    |Required|Position|Default Value                               |Summary                         |
|:----------|:------:|:------:|:------:|:------------------------------------------:|:-------------------------------|
|Stream     |`string`|✔       |1       |                                            |Stream containing the Json data.|
|HandleState|`entity`|        |2       |Writes the state to a file called State.Json|How to handle the state         |
---
title: EntityGetProperties Step | Core SDK Documentation
sidebar_label: EntityGetProperties
description: Gets the names of all properties of an entity. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntityGetProperties
_Alias_:`EntityGetProperties`, `GetProps`, `GetProperties`

_Output_:`Array<T>`

Gets the names of all properties of an entity


|Parameter|Type    |Required|Position|Summary                          |
|:--------|:------:|:------:|:------:|:--------------------------------|
|Entity   |`entity`|✔       |1       |The entity to get properties from|
## Examples
#### SCL
```scl
EntityGetProperties (property1: 1, property2: 2)
```
#### Expected Output
```scl
["property1", "property2"]
```
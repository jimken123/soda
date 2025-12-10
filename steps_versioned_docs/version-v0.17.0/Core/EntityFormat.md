---
title: EntityFormat Step | Core SDK Documentation
sidebar_label: EntityFormat
description: Formats an entity or an array of entities as a string. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntityFormat
_Alias_:`EntityFormat`, `Format`

_Output_:`StringStream`

Formats an entity or an array of entities as a string


|Parameter|Type                       |Required|Position|Summary             |
|:--------|:-------------------------:|:------:|:------:|:-------------------|
|Entity   |`entity` or `array<entity>`|✔       |1       |The Entity to Format|
## Examples
### Example 1
#### SCL
```scl
EntityFormat (a:1, b:2)
```
#### Expected Output
```scl
( 'a': 1 'b': 2 )
```
### Example 2
#### SCL
```scl
EntityFormat [(a:1, b:2), (a:3, b:4)]
```
#### Expected Output
```scl
[ ( 'a': 1 'b': 2 ), ( 'a': 3 'b': 4 ) ]
```
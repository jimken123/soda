---
title: EntityGetValue Step | Core SDK Documentation
sidebar_label: EntityGetValue
description: Gets the value of a property from an entity. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntityGetValue
_Alias_:`EntityGetValue`, `From`

_Output_:`The required type`

Gets the value of a property from an entity


|Parameter         |Type    |Required|Position|Summary                                                                                 |
|:-----------------|:------:|:------:|:------:|:---------------------------------------------------------------------------------------|
|Entity            |`entity`|✔       |1       |The entity to get the property from.                                                    |
|Property<br/>_Get_|`string`|✔       |2       |The name of the property to get. Returns an empty string if the property is not present.|
## Examples
### Example 1
#### SCL
```scl
(foo: 123).foo
```
#### Expected Output
```scl
123
```
### Example 2
#### SCL
```scl
(foo: 123)['foo']
```
#### Expected Output
```scl
123
```
### Example 3
#### SCL
```scl
(foo: (bar: 123))['foo.bar']
```
#### Expected Output
```scl
123
```
### Example 4
#### SCL
```scl
(foo: (bar: 123)).foo.bar
```
#### Expected Output
```scl
123
```
### Example 5
#### SCL
```scl
From ('type': 'C', 'value': 1) Get: 'value'
```
#### Expected Output
```scl
1
```
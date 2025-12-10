---
title: EntityHasProperty Step | Core SDK Documentation
sidebar_label: EntityHasProperty
description: Checks if an entity has a particular property.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntityHasProperty
_Alias_:`EntityHasProperty`, `DoesEntityHave`, `DoesEntity`

_Output_:`SCLBool`

Checks if an entity has a particular property.


|Parameter          |Type    |Required|Position|Summary                             |
|:------------------|:------:|:------:|:------:|:-----------------------------------|
|Entity             |`entity`|✔       |1       |The entity to check the property on.|
|Property<br/>_Have_|`string`|✔       |2       |The name of the property to check.  |
## Examples
### Example 1
#### SCL
```scl
DoesEntity ('type': 'C', 'value': 1) Have: 'type'
```
#### Expected Output
```scl
True
```
### Example 2
#### SCL
```scl
DoesEntity ('type': null, 'value': 1) Have: 'type'
```
#### Expected Output
```scl
True
```
### Example 3
#### SCL
```scl
EntityHasProperty ('type': 'C', 'value': 1) 'name'
```
#### Expected Output
```scl
False
```
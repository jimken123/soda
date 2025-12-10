---
title: SchemaCreate Step | Core SDK Documentation
sidebar_label: SchemaCreate
description: Create a new schema by analysing the entity properties and values in. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# SchemaCreate
_Alias_:`SchemaCreate`, `GenerateSchema`, `CreateSchema`

_Output_:`Entity`

Create a new schema by analysing the entity properties and values in an array or an entity stream. This Step is best used with data sources where the property values already have a data type (string, date, int...) such as JSON or databases. For generating schemas from flat data sources such as Concordance or CSV, use the `SchemaCreateCoerced` step, which will attempt to infer the property types.


|Parameter            |Type           |Required|Position|Default Value|Summary                                                                     |
|:--------------------|:-------------:|:------:|:------:|:-----------:|:---------------------------------------------------------------------------|
|Entities<br/>_From_  |`array<entity>`|✔       |1       |             |The array or entity stream to analyse                                       |
|AllowExtraProperties |`bool`         |        |        |false        |Whether properties other than the explicitly defined properties are allowed.|
|SchemaName<br/>_Name_|`string`       |        |        |Schema       |The name of the schema to create                                            |
## Examples
### Example 1
#### SCL
```scl
SchemaCreate Entities: [('StringProperty': "abc" 'IntegerProperty': 123)] SchemaName: 'My Schema'
```
#### Expected Output
```scl
('title': "My Schema" 'type': "object" 'additionalProperties': False 'properties': ('StringProperty': ('type': "string") 'IntegerProperty': ('type': "integer")) 'required': ["StringProperty", "IntegerProperty"])
```
### Example 2
Since IntegerProperty is quoted, this step interprets it as a string.
#### SCL
```scl
SchemaCreate Entities: [('StringProperty': "abc" 'IntegerProperty': "123")] SchemaName: 'My Schema'
```
#### Expected Output
```scl
('title': "My Schema" 'type': "object" 'additionalProperties': False 'properties': ('StringProperty': ('type': "string") 'IntegerProperty': ('type': "string")) 'required': ["StringProperty", "IntegerProperty"])
```
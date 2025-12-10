---
title: SchemaCreateCoerced Step | Core SDK Documentation
sidebar_label: SchemaCreateCoerced
description: Create a new schema by analysing the entity properties and values in. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# SchemaCreateCoerced
_Alias_:`SchemaCreateCoerced`, `GenerateSchemaCoerced`

_Output_:`Entity`

Create a new schema by analysing the entity properties and values in an array or an entity stream. This Step is best used with flat data sources such as Concordance or CSV as it does additional processing to infer the data types of strings.


|Parameter           |Type                                   |Required|Position|Default Value       |Summary                                                                                                                                                                      |
|:-------------------|:-------------------------------------:|:------:|:------:|:------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Entities            |`array<entity>`                        |✔       |1       |                    |The array to get the lat element of                                                                                                                                          |
|AllowExtraProperties|`bool`                                 |        |        |false               |Whether properties other than the explicitly defined properties are allowed.                                                                                                 |
|BooleanFalseFormats |`string` or `array<string>` or `entity`|        |        |False               |Strings which represent falsity This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string                            |
|BooleanTrueFormats  |`string` or `array<string>` or `entity`|        |        |True                |Strings which represent truth. This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string                             |
|CaseSensitive       |`bool`                                 |        |        |False               |Whether transformations are case sensitive                                                                                                                                   |
|DateInputFormats    |`string` or `array<string>` or `entity`|        |        |yyyy-MM-ddTHH:mm:ssK|ISO 8601 Date Formats to use for strings representing dates This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string|
|NullFormats         |`string` or `array<string>` or `entity`|        |        |No null values      |Strings which represent null This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string                               |
|SchemaName          |`string`                               |        |        |Schema              |The name of the schema to create                                                                                                                                             |
## Examples
Even though IntegerProperty is represented as a string in the input entity (quoted), it is converted to an integer in the schema.
#### SCL
```scl
SchemaCreateCoerced Entities: [('StringProperty': "abc" 'IntegerProperty': "123")] SchemaName: 'My Schema'
```
#### Expected Output
```scl
('title': "My Schema" 'type': "object" 'additionalProperties': False 'properties': ('StringProperty': ('type': "string") 'IntegerProperty': ('type': "integer")) 'required': ["StringProperty", "IntegerProperty"])
```
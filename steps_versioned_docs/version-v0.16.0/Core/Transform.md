---
title: Transform Step | Core SDK Documentation
sidebar_label: Transform
description: Attempts to transform entities in the stream so that they match the schema. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Transform
_Alias_:`Transform`, `SchemaTransform`

_Output_:`Array<T>`

Attempts to transform entities in the stream so that they match the schema.              Will transform strings into ints, datetimes, booleans, array, or nulls where appropriate.              The properties of the transformed entities will be in the same order as in the schema              For more information on schemas please see the [documentation](/docs/schemas).


|Parameter            |Type                                      |Required|Position|Default Value                                     |Summary                                                                                                                                                                                                       |
|:--------------------|:----------------------------------------:|:------:|:------:|:------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|EntityStream         |`array<entity>`                           |✔       |1       |                                                  |Entities to transform with the schema                                                                                                                                                                         |
|Schema               |`entity`                                  |✔       |2       |                                                  |The schema to transform into                                                                                                                                                                                  |
|ErrorBehavior        |[ErrorBehavior](../Enums/ErrorBehavior.md)|        |3       |Fail                                              |How to behave if an error occurs.                                                                                                                                                                             |
|ArrayDelimiters      |`string` or `array<string>` or `entity`   |        |        |No Delimiter                                      |Strings which can be used to delimit arrays This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string                                                 |
|BooleanFalseFormats  |`string` or `array<string>` or `entity`   |        |        |False, false, No, or 0                            |Strings which represent falsity This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string Case sensitivity is determined by the CaseSensitive property|
|BooleanTrueFormats   |`string` or `array<string>` or `entity`   |        |        |True, true, Yes, or 1                             |Strings which represent truth. This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string Case sensitivity is determined by the CaseSensitive property |
|CaseSensitive        |`bool`                                    |        |        |False                                             |Whether transformations are case sensitive                                                                                                                                                                    |
|DateInputFormats     |`string` or `array<string>` or `entity`   |        |        |No Date Input                                     |ISO 8601 Date Formats to use for strings representing dates This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string                                 |
|NullFormats          |`string` or `array<string>` or `entity`   |        |        |Null or null                                      |Strings which represent null This can either be a string, and array of string, or an entity mapping field names to strings or arrays of string Case sensitivity is determined by the CaseSensitive property   |
|RemoveExtraProperties|`bool`                                    |        |        |True if the Schema does not allow extra properties|Whether additional properties outside the schema should be removed                                                                                                                                            |
|RoundingPrecision    |`double`                                  |        |        |0.01                                              |Doubles may be rounded to integers if the difference is less than this number                                                                                                                                 |
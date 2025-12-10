---
title: Validate Step | Core SDK Documentation
sidebar_label: Validate
description: Validate that the schema is valid for all entities. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Validate
_Alias_:`Validate`, `SchemaValidate`

_Output_:`Array<T>`

Validate that the schema is valid for all entities. Does not evaluate the entity stream. For more information on schemas please see the [documentation](https://Phoenix.sh/docs/schemas/).


|Parameter    |Type                                      |Required|Position|Default Value                        |Summary                                                                                                                                                                                                                                                                                                |
|:------------|:----------------------------------------:|:------:|:------:|:-----------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|EntityStream |`array<entity>`                           |✔       |1       |                                     |Entities to validate with the schema                                                                                                                                                                                                                                                                   |
|Schema       |`entity`                                  |✔       |2       |                                     |The Json Schema to validate.                                                                                                                                                                                                                                                                           |
|ErrorBehavior|[ErrorBehavior](../Enums/ErrorBehavior.md)|        |3       |Fail                                 |How to behave if an error occurs.                                                                                                                                                                                                                                                                      |
|OnInvalid    |`entity`                                  |        |        |Either this or 'Replace' must be set.|A function that does something with every entity that fails validation.   The actions defined in ErrorBehaviour will also happen. This function takes an entity with three properties: 'RowNumber', 'ErrorMessage', 'Location', and 'Entity' where 'Entity' contains the entity that failed to validate|
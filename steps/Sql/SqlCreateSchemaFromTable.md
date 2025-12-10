---
title: SqlCreateSchemaFromTable Step | SQL Database Connector Documentation
sidebar_label: SqlCreateSchemaFromTable
description: Creates a Schema entity from a SQL table. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Sql]
hide_title: true
hide_table_of_contents: true
---

# SqlCreateSchemaFromTable
_Alias_:`SqlCreateSchemaFromTable`

_Output_:`Entity`

Creates a Schema entity from a SQL table


|Parameter     |Type    |Required|Position|Default Value             |Summary                                      |
|:-------------|:------:|:------:|:------:|:------------------------:|:--------------------------------------------|
|Table         |`string`|✔       |1       |                          |The table to create a schema from            |
|PostgresSchema|`string`|        |2       |No schema                 |The schema this table belongs to, if postgres|
|Connection    |`entity`|        |3       |The Most Recent Connection|The Connection String                        |
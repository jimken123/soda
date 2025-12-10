---
title: SqlInsert Step | SQL Database Connector Documentation
sidebar_label: SqlInsert
description: Inserts data into a SQL table. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Sql]
hide_title: true
hide_table_of_contents: true
---

# SqlInsert
_Alias_:`SqlInsert`

_Output_:`Unit`

Inserts data into a SQL table


|Parameter         |Type           |Required|Position|Default Value             |Summary                                      |
|:-----------------|:-------------:|:------:|:------:|:------------------------:|:--------------------------------------------|
|Entities<br/>_Sql_|`array<entity>`|✔       |1       |                          |The entities to insert                       |
|Schema            |`entity`       |✔       |2       |                          |The schema that the data must match          |
|PostgresSchema    |`string`       |        |3       |No schema                 |The schema this table belongs to, if postgres|
|Connection        |`entity`       |        |4       |The Most Recent Connection|The Connection String                        |
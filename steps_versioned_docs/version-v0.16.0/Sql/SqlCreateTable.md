---
title: SqlCreateTable Step | SQL Database Connector Documentation
sidebar_label: SqlCreateTable
description: Create a SQL table from a given schema. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Sql]
hide_title: true
hide_table_of_contents: true
---

# SqlCreateTable
_Alias_:`SqlCreateTable`

_Output_:`Unit`

Create a SQL table from a given schema


|Parameter |Type    |Required|Position|Default Value             |Summary                          |
|:---------|:------:|:------:|:------:|:------------------------:|:--------------------------------|
|Schema    |`entity`|✔       |1       |                          |The table to create a schema from|
|Connection|`entity`|        |2       |The Most Recent Connection|The Connection String            |
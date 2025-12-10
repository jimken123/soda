---
title: SqlQuery Step | SQL Database Connector Documentation
sidebar_label: SqlQuery
description: Executes a SQL query and returns the result as an entity stream.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Sql]
hide_title: true
hide_table_of_contents: true
---

# SqlQuery
_Alias_:`SqlQuery`

_Output_:`Array<T>`

Executes a SQL query and returns the result as an entity stream.


|Parameter      |Type    |Required|Position|Default Value             |Summary              |
|:--------------|:------:|:------:|:------:|:------------------------:|:--------------------|
|Query<br/>_Sql_|`string`|✔       |1       |                          |The Sql query to run |
|Connection     |`entity`|        |2       |The Most Recent Connection|The Connection String|
---
title: CreatePostgresConnectionString Step | SQL Database Connector Documentation
sidebar_label: CreatePostgresConnectionString
description: Creates a PostgreSQL connection string. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Sql]
hide_title: true
hide_table_of_contents: true
---

# CreatePostgresConnectionString
_Alias_:`CreatePostgresConnectionString`

_Output_:`Entity`

Creates a PostgreSQL connection string


|Parameter        |Type    |Required|Position|Summary                              |
|:----------------|:------:|:------:|:------:|:------------------------------------|
|Host             |`string`|✔       |1       |The host name                        |
|Port             |`int`   |✔       |2       |The server port                      |
|Database<br/>_Db_|`string`|✔       |3       |The database to run the query against|
|UserId           |`string`|✔       |4       |The user id for database access      |
|Password         |`string`|✔       |5       |The password for database access.    |
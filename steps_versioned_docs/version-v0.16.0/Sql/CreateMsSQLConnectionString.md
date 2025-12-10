---
title: CreateMsSQLConnectionString Step | SQL Database Connector Documentation
sidebar_label: CreateMsSQLConnectionString
description: Creates an MSSQL connection string. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Sql]
hide_title: true
hide_table_of_contents: true
---

# CreateMsSQLConnectionString
_Alias_:`CreateMsSQLConnectionString`

_Output_:`Entity`

Creates an MSSQL connection string


|Parameter        |Type    |Required|Position|Default Value                      |Summary                              |
|:----------------|:------:|:------:|:------:|:---------------------------------:|:------------------------------------|
|Server           |`string`|✔       |1       |                                   |The server address (and port)        |
|Database<br/>_Db_|`string`|✔       |2       |                                   |The database to run the query against|
|UserName         |`string`|        |3       |Use integrated security if not set.|The username for database access.    |
|Password         |`string`|        |4       |Use integrated security if not set.|The password for database access.    |
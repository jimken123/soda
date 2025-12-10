---
title: CreateMySQLConnectionString Step | SQL Database Connector Documentation
sidebar_label: CreateMySQLConnectionString
description: Create a database connection string for a MySQL database.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Sql]
hide_title: true
hide_table_of_contents: true
---

# CreateMySQLConnectionString
_Alias_:`CreateMySQLConnectionString`

_Output_:`Entity`

Create a database connection string for a MySQL database.


|Parameter                      |Type    |Required|Position|Default Value|Summary                              |
|:------------------------------|:------:|:------:|:------:|:-----------:|:------------------------------------|
|Server                         |`string`|✔       |1       |             |The server address                   |
|Database<br/>_Db_              |`string`|✔       |2       |             |The database to run the query against|
|UId<br/>_UserId_<br/>_Username_|`string`|✔       |3       |             |The username for database access.    |
|Pwd<br/>_Password_             |`string`|✔       |4       |             |The password for database access.    |
|Port                           |`int`   |        |5       |3306         |The server port                      |
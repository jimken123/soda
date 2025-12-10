---
title: CreateMsSQLConnectionString Step | SQL Database Connector Documentation
sidebar_label: CreateMsSQLConnectionString
description: Creates an MSSQL connection string. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Sql]
hide_title: true
hide_table_of_contents: true
---

# CreateMsSQLConnectionString
_Alias_:`CreateMsSQLConnectionString`

_Output_:`Entity`

Creates an MSSQL connection string


|Parameter                                                      |Type    |Required|Position|Default Value                            |Summary                                                                                                                                                                                                                                 |
|:--------------------------------------------------------------|:------:|:------:|:------:|:---------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Server                                                         |`string`|✔       |1       |                                         |The server address (and port)                                                                                                                                                                                                           |
|Database<br/>_Db_                                              |`string`|✔       |2       |                                         |The database to run the query against                                                                                                                                                                                                   |
|UserName                                                       |`string`|        |3       |Use integrated security if not set.      |The username for database access.                                                                                                                                                                                                       |
|Password                                                       |`string`|        |4       |Use integrated security if not set.      |The password for database access.                                                                                                                                                                                                       |
|AttachDbFilename<br/>_ExtendedProperties_<br/>_InitialFileName_|`string`|        |        |None                                     |The name of the primary database file, including the full path name of an attachable database. AttachDBFilename is only supported for primary data files with an .mdf extension.                                                        |
|Authentication                                                 |`string`|        |        |None                                     |The authentication method used for Connecting to SQL Database By Using Azure Active Directory Authentication. Valid values are: Active Directory Integrated, Active Directory Password, Sql Password.                                   |
|Encrypt                                                        |`bool`  |        |        |False                                    |When true, SQL Server uses SSL encryption for all data sent between the client and server if the server has a certificate installed. Recognized values are true, false, yes, and no. For more information, see Connection String Syntax.|
|IntegratedSecurity<br/>_TrustedConnection_                     |`bool`  |        |        |True if Username and Password are not set|When false, User ID and Password are specified in the connection. When true, the current Windows account credentials are used for authentication.                                                                                       |
|TrustServerCertificate                                         |`bool`  |        |        |False                                    |When set to true, SSL is used to encrypt the channel when bypassing walking the certificate chain to validate trust. If TrustServerCertificate is set to true and Encrypt is set to false, the channel is not encrypted.                |
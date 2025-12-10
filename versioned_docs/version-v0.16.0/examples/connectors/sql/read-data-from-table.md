---
title: Read Data from a SQL Table | SQL Connector Examples
sidebar_label: Read Data from a SQL Table
---

# Read Data from a SQL Table

[Instructions on how to install and setup Phoenix and the SQL Connector.](sql.md)

This workflow:

1. Reads a row from a SQL table
2. Sets variables called SourcePath and DestinationPath according to the values in that row
3. Prints the SCL to copy a file from SourcePath to DestinationPath

See [Create SQL Table and Insert Data](create-table-insert-data.md) example
to set up a table that can be used in this example.

## SCL

```scl
- <Connection> = CreateMySQLConnectionString
                   Server: 'localhost'
                   Database: 'database'
                   UserName: 'root'
                   Password: 'verysecret'
- <TableName> = 'Config'
- <Rows> = SQLQuery
             Connection: <Connection>
             Query: $"Select SourcePath, DestinationPath from {<TableName>} where Id = 2"

- <Row>             = <Rows>[0]
- <SourcePath>      = <Row>['SourcePath']
- <DestinationPath> = <Row>['DestinationPath']
- Print $"- FileCopy {<SourcePath>} {<DestinationPath>}"
```

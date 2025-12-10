---
title: Create SQL Table and Insert Data | SQL Connector Examples
sidebar_label: Create SQL Table and Insert Data
---

# Create SQL Table and Insert Data

[Instructions on how to install and setup Phoenix and the SQL Connector.](sql.md)

This workflow:

1. Drops the table 'MyTable' if it exists
2. Creates a new Table 'MyTable'
3. Inserts data into 'MyTable'

To try out this workflow, you'll need an instance of MariaDb running
on `localhost:3306`. You can use a Docker container for this:

```bash
docker run -d -p 3306:3306 --name mariadb -e MYSQL_ROOT_PASSWORD=verysecret -e MYSQL_DATABASE=database mariadb
```

## SCL

```scl
- <Connection> = CreateMySQLConnectionString
                         Server: 'localhost'
                         Database: 'database'
                         UserName: 'root'
                         Password: 'verysecret'


- <TableName> = 'Config'
- <Schema> = (
    Name: <TableName>
    AllowExtraProperties: False
    Properties: (
      'title': "MyTable"
      'additionalProperties': False
      'properties': (
        'Id': ('type': "integer")
        'Name': ('type': "string")
      )
      'required': ["Id"]
      )
  )

- SqlCommand
    Connection: <Connection>
    Command: $"DROP TABLE IF EXISTS {<TableName>}"

- SqlCreateTable
    Connection: <Connection>
    Schema: <Schema>

- SqlInsert
    Connection: <Connection>
    Entities: [
      (Id: 1 SourcePath: 'C:\temp\file1.txt' DestinationPath: 'C:\temp\file1-2.txt' )
      (Id: 2 SourcePath: 'C:\temp\file2.txt' DestinationPath: 'C:\temp\file2-2.txt' )
    ]
    Schema: <Schema>

```

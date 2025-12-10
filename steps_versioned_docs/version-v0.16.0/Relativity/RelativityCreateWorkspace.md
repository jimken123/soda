---
title: RelativityCreateWorkspace Step | Phoenix Connector for Relativity Documentation
sidebar_label: RelativityCreateWorkspace
description: Creates a new Relativity Workspace. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityCreateWorkspace
_Alias_:`RelativityCreateWorkspace`

_Output_:`Entity`

Creates a new Relativity Workspace


|Parameter               |Type             |Required|Position|Summary                                                                                                                                                 |
|:-----------------------|:---------------:|:------:|:------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
|WorkspaceName<br/>_Name_|`string`         |✔       |1       |The user-friendly name of the workspace                                                                                                                 |
|DefaultCacheLocationId  |`int`            |✔       |        |The Default Cache Location Artifact Id The Default Cache Location represents a securable cache location server object associated with the workspace.    |
|DefaultFileRepositoryId |`int`            |✔       |        |The Default File Repository Artifact Id. The Default File Repository represents a securable file repository server object associated with the workspace.|
|Matter                  |`int` or `string`|✔       |        |The matter. A matter is the case or legal action associated with the workspace.                                                                         |
|ResourcePoolId          |`int` or `string`|✔       |        |The Resource Pool Artifact Id A resource pool represents a securable resource pool object associated with the workspace.                                |
|SqlServerId             |`int`            |✔       |        |The Sql Server Artifact Id SQL Server represents a securable SQL server object associated with the workspace.                                           |
|StatusId                |`int`            |✔       |        |The status Artifact Id. A status is an object representing the status of the workspace used in views to filter on workspaces.                           |
|TemplateId              |`int` or `string`|✔       |        |The Template Artifact Id. The Template is an object representing an existing workspace structure used to create the workspace.                          |
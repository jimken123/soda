---
title: RelativitySendQuery Step | Phoenix Connector for Relativity Documentation
sidebar_label: RelativitySendQuery
description: Query for Workspaces, Documents, RDOs and System Types. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativitySendQuery
_Alias_:`RelativitySendQuery`

_Output_:`Array<T>`

Query for Workspaces, Documents, RDOs and System Types


|Parameter     |Type                                             |Required|Position|Default Value  |Example                                              |Summary                                                                                                         |
|:-------------|:-----------------------------------------------:|:------:|:------:|:-------------:|:---------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------|
|Workspace     |`int` or `string`                                |✔       |1       |               |                                                     |The Workspace to query. You can provide either the Artifact Id or the name                                      |
|Condition     |`string`                                         |✔       |2       |               |('Email From' IN ['Test0@Test.com','Test1@Test.com'])|The query condition See Relativity's developer documentation for more details                                   |
|Fields        |`array<int>` or `array<string>`                  |        |3       |Just ArtifactId|                                                     |The fields to return. The ArtifactId field is always returned. You can provide either the ArtifactId or the name|
|ArtifactType  |[ArtifactType](../Enums/ArtifactType.md) or `int`|        |        |Document (10)  |                                                     |The Artifact type to query                                                                                      |
|Length        |`int`                                            |        |        |100            |                                                     |Max number of results to return in this query call.                                                             |
|SortArtifactId|`int`                                            |        |        |Do not sort    |                                                     |ArtifactId of the field to sort by                                                                              |
|SortDirection |[SortEnum](../Enums/SortEnum.md)                 |        |        |Ascending      |                                                     |Direction to sort by                                                                                            |
|Start         |`int`                                            |        |        |0              |                                                     |1-based index of first document in query results to retrieve                                                    |
---
title: RelativityImportEntities Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityImportEntities
description: Import Entities into Relativity. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityImportEntities
_Alias_:`RelativityImportEntities`

_Output_:`Unit`

Import Entities into Relativity


|Parameter         |Type             |Required|Position|Default Value |Summary                                                                         |
|:-----------------|:---------------:|:------:|:------:|:------------:|:-------------------------------------------------------------------------------|
|Workspace         |`int` or `string`|✔       |1       |              |The Workspace to import into. You can provide either the Artifact Id or the name|
|Entities          |`array<entity>`  |✔       |2       |              |                                                                                |
|Schema            |`entity`         |✔       |3       |              |                                                                                |
|ControlNumberField|`string`         |        |4       |Control Number|                                                                                |
|FilePathField     |`string`         |        |5       |No file path  |                                                                                |
|FolderPathField   |`string`         |        |6       |No folder path|                                                                                |
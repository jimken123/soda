---
title: RelativityCreateFolder Step | Phoenix Connector for Relativity Documentation
sidebar_label: RelativityCreateFolder
description: Create a folder in a relativity workspace. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityCreateFolder
_Alias_:`RelativityCreateFolder`

_Output_:`SCLInt`

Create a folder in a relativity workspace


|Parameter            |Type             |Required|Position|Default Value                                  |Summary                                                                                              |
|:--------------------|:---------------:|:------:|:------:|:---------------------------------------------:|:----------------------------------------------------------------------------------------------------|
|Workspace            |`int` or `string`|✔       |1       |                                               |The Workspace where you want to create the folder. You can provide either the Artifact Id or the name|
|FolderName<br/>_Name_|`string`         |✔       |2       |                                               |The name of the Folder DTO that you want to create.                                                  |
|ParentFolderId       |`int`            |        |3       |Create the folder at the root of the workspace.|The Id of the parent where you want to add the new subfolder.                                        |
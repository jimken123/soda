---
title: DirectoryGetItems Step | File System Connector Documentation
sidebar_label: DirectoryGetItems
description: Gets all items in a directory. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# DirectoryGetItems
_Alias_:`DirectoryGetItems`, `ls`, `dir`

_Output_:`Array<T>`

Gets all items in a directory


|Parameter         |Type    |Required|Position|Default Value|Example|Summary                                      |
|:-----------------|:------:|:------:|:------:|:-----------:|:-----:|:--------------------------------------------|
|Directory         |`string`|✔       |1       |             |       |The path to the directory to enumerate       |
|Pattern           |`string`|        |2       |No Pattern   |\*.jpg |The pattern to search by                     |
|IncludeFiles      |`bool`  |        |3       |true         |       |Whether to include files in the results      |
|IncludeDirectories|`bool`  |        |4       |true         |       |Whether to include directories in the results|
|Recursive         |`bool`  |        |5       |true         |       |Whether to search recursively                |
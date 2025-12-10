---
title: FileCopy Step | File System Connector Documentation
sidebar_label: FileCopy
description: Copy a file. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# FileCopy
_Alias_:`FileCopy`

_Output_:`Unit`

Copy a file


|Parameter      |Type    |Required|Position|Default Value|Summary                                        |
|:--------------|:------:|:------:|:------:|:-----------:|:----------------------------------------------|
|SourceFile     |`string`|✔       |1       |             |The source file name                           |
|DestinationFile|`string`|✔       |2       |             |The destination file name                      |
|Overwrite      |`bool`  |        |3       |false        |True if the destination file can be overwritten|
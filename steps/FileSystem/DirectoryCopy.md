---
title: DirectoryCopy Step | File System Connector Documentation
sidebar_label: DirectoryCopy
description: Copy a directory. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# DirectoryCopy
_Alias_:`DirectoryCopy`

_Output_:`Unit`

Copy a directory


|Parameter           |Type    |Required|Position|Default Value|Summary                                        |
|:-------------------|:------:|:------:|:------:|:-----------:|:----------------------------------------------|
|SourceDirectory     |`string`|✔       |1       |             |The source directory name                      |
|DestinationDirectory|`string`|✔       |2       |             |The destination directory name                 |
|Overwrite           |`bool`  |        |3       |false        |True if the destination file can be overwritten|
|CopySubDirectories  |`bool`  |        |4       |false        |True to also copy subdirectories               |
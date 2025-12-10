---
title: FileExtract Step | File System Connector Documentation
sidebar_label: FileExtract
description: Extract a file in the file system.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# FileExtract
_Alias_:`FileExtract`, `ExtractFile`

_Output_:`Unit`

Extract a file in the file system.


|Parameter                      |Type    |Required|Position|Default Value|Summary                                    |
|:------------------------------|:------:|:------:|:------:|:-----------:|:------------------------------------------|
|ArchiveFilePath<br/>_Container_|`string`|✔       |1       |             |The path to the archive to extract.        |
|Destination<br/>_ToDirectory_  |`string`|✔       |2       |             |The directory to extract to.               |
|Overwrite                      |`bool`  |        |3       |false        |Whether to overwrite files when extracting.|
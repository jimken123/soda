---
title: FileWrite Step | File System Connector Documentation
sidebar_label: FileWrite
description: Writes a file to the local file system.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# FileWrite
_Alias_:`FileWrite`, `WriteToFile`

_Output_:`Unit`

Writes a file to the local file system.


|Parameter        |Type                                    |Required|Position|Default Value|Summary                                            |
|:----------------|:--------------------------------------:|:------:|:------:|:-----------:|:--------------------------------------------------|
|Stream<br/>_Data_|`string`                                |✔       |1       |             |The data to write to file.                         |
|Path             |`string`                                |✔       |2       |             |The path of the file to write to.                  |
|Compress         |`bool`                                  |        |3       |false        |Whether to compress the data when writing the file.|
|Encoding         |[EncodingEnum](../Enums/EncodingEnum.md)|        |4       |UTF8 no BOM  |The encoding to use to write the file              |
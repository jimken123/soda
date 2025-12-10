---
title: FileRead Step | File System Connector Documentation
sidebar_label: FileRead
description: Reads text from a file.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# FileRead
_Alias_:`FileRead`, `ReadFromFile`

_Output_:`StringStream`

Reads text from a file.


|Parameter |Type                                    |Required|Position|Default Value|Summary                          |
|:---------|:--------------------------------------:|:------:|:------:|:-----------:|:--------------------------------|
|Path      |`string`                                |✔       |1       |             |The name of the file to read.    |
|Encoding  |[EncodingEnum](../Enums/EncodingEnum.md)|        |2       |UTF8 no BOM  |How the file is encoded.         |
|Decompress|`bool`                                  |        |3       |false        |Whether to decompress this string|
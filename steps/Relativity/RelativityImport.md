---
title: RelativityImport Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityImport
description: Imports a load file into Relativity using the desktop client. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityImport
_Alias_:`RelativityImport`

_Output_:`Unit`

Imports a load file into Relativity using the desktop client


|Parameter           |Type                                        |Required|Position|Default Value            |Example         |Summary                                                                         |
|:-------------------|:------------------------------------------:|:------:|:------:|:-----------------------:|:--------------:|:-------------------------------------------------------------------------------|
|Workspace           |`int` or `string`                           |✔       |1       |                         |                |The Workspace to import into. You can provide either the Artifact Id or the name|
|DestinationFolder   |`int`                                       |        |        |The case root folder.    |1476826         |Sets the destination folder for the upload.                                     |
|FileImportType      |[FileImportType](../Enums/FileImportType.md)|✔       |        |                         |Native          |The file import type                                                            |
|FilePath            |`string`                                    |✔       |        |                         |C:/Data/Load.csv|The path to the file to import. This should be a .csv, .dat, or .opt file.      |
|FullTextFileEncoding|`int`                                       |        |        |Windows' default encoding|1252            |Sets the encoding of any full text files to a particular code page id.          |
|LoadFileEncoding    |`int`                                       |        |        |Windows' default encoding|1252            |Set the encoding of the load file to a particular code page id.                 |
|SettingsFilePath    |`string`                                    |✔       |        |                         |C:/Settings.kwe |The path to the settings file (.kwe or .kwi)                                    |
|StartLineNumber     |`int`                                       |        |        |0                        |                |The starting line number of the load file for the upload.                       |
---
title: NuixExtractEntities Step | Nuix Connector Documentation
sidebar_label: NuixExtractEntities
description: Extract Entities from a Nuix Case.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixExtractEntities
_Alias_:`NuixExtractEntities`

_Output_:`Unit`

*Requires Nuix.Version 5.0*

Extract Entities from a Nuix Case.


|Parameter                     |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:-----------------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|OutputFolder<br/>_ToDirectory_|`string`|✔       |1       |                         |C:/Output      |The path to the folder to put the output files in.                                                                                                                                           |
|CasePath<br/>_Directory_      |`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
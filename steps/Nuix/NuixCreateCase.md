---
title: NuixCreateCase Step | Nuix Connector Documentation
sidebar_label: NuixCreateCase
description: Creates a new case and opens it.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixCreateCase
_Alias_:`NuixCreateCase`

_Output_:`Unit`

*Requires Nuix.Version 5.0*

*Requires Nuix.Features: CASE_CREATION*

Creates a new case and opens it.


|Parameter               |Type    |Required|Position|Default Value |Example        |Summary                                         |
|:-----------------------|:------:|:------:|:------:|:------------:|:-------------:|:-----------------------------------------------|
|CasePath<br/>_Directory_|`string`|✔       |1       |              |C:/Cases/MyCase|The path to the directory to create the case in.|
|CaseName<br/>_Name_     |`string`|✔       |2       |              |               |The name of the case to create.                 |
|Investigator            |`string`|✔       |3       |              |               |Name of the investigator.                       |
|Description             |`string`|        |4       |No Description|               |Description of the case.                        |
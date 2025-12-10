---
title: NuixGeneratePrintPreviews Step | Nuix Connector Documentation
sidebar_label: NuixGeneratePrintPreviews
description: Generates print previews for items in a production set.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixGeneratePrintPreviews
_Alias_:`NuixGeneratePrintPreviews`

_Output_:`Unit`

*Requires Nuix.Version 5.2*

*Requires Nuix.Features: PRODUCTION_SET*

Generates print previews for items in a production set.


|Parameter                            |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:------------------------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ProductionSetName<br/>_ProductionSet_|`string`|✔       |1       |                         |               |The production set to generate print previews for.                                                                                                                                           |
|CasePath<br/>_Directory_             |`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
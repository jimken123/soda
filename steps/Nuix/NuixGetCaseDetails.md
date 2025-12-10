---
title: NuixGetCaseDetails Step | Nuix Connector Documentation
sidebar_label: NuixGetCaseDetails
description: Returns an Entity with information about the current case. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixGetCaseDetails
_Alias_:`NuixGetCaseDetails`

_Output_:`Entity`

*Requires Nuix.Version 7.4*

Returns an Entity with information about the current case. Includes Name, Description, GUID, Investigator, InvestigationTimeZone, Users, Custodians, Tags, Languages, Location (path), and if available the earliest and latest dates.


|Parameter               |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:-----------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CasePath<br/>_Directory_|`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
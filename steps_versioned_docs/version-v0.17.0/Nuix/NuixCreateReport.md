---
title: NuixCreateReport Step | Nuix Connector Documentation
sidebar_label: NuixCreateReport
description: Creates a report for a Nuix case. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixCreateReport
_Alias_:`NuixCreateReport`

_Output_:`StringStream`

*Requires Nuix.Version 6.2*

*Requires Nuix.Features: ANALYSIS*

Creates a report for a Nuix case. The report is in csv format. The headers are 'Custodian', 'Type', 'Value', and 'Count'. The different types are: 'Kind', 'Type', 'Tag', and 'Address'. Use this inside a WriteFile step to write it to a file.


|Parameter               |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:-----------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CasePath<br/>_Directory_|`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
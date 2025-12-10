---
title: NuixCreateTermList Step | Nuix Connector Documentation
sidebar_label: NuixCreateTermList
description: Creates a list of all terms appearing in the case and their frequencies. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixCreateTermList
_Alias_:`NuixCreateTermList`

_Output_:`StringStream`

*Requires Nuix.Version 5.0*

Creates a list of all terms appearing in the case and their frequencies. The report is in CSV format. The headers are 'Term' and 'Count' Use this inside a WriteFile step to write it to a file.


|Parameter               |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:-----------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CasePath<br/>_Directory_|`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
---
title: NuixCountItems Step | Nuix Connector Documentation
sidebar_label: NuixCountItems
description: Returns the number of items matching a particular search term. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixCountItems
_Alias_:`NuixCountItems`

_Output_:`SCLInt`

*Requires Nuix.Version 7.0*

Returns the number of items matching a particular search term


|Parameter               |Type    |Required|Position|Default Value             |Example        |Summary                                                                                                                                                                                                         |
|:-----------------------|:------:|:------:|:------:|:------------------------:|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SearchTerm<br/>_Search_ |`string`|✔       |1       |                          |\*.txt         |The search term to count.                                                                                                                                                                                       |
|SearchOptions           |`entity`|        |2       |No search options provided|               |Pass additional search options to nuix. Options available:   - defaultFields: field(s) to query against when not present in the search string. Please see the nuix API for Case.searchUnsorted for more details.|
|CasePath<br/>_Directory_|`string`|        |        |Use the current open case |C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.                   |
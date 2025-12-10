---
title: NuixAnnotateDocumentIdList Step | Nuix Connector Documentation
sidebar_label: NuixAnnotateDocumentIdList
description: Annotates a document ID list to add production set names to it.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixAnnotateDocumentIdList
_Alias_:`NuixAnnotateDocumentIdList`

_Output_:`Unit`

*Requires Nuix.Version 7.4*

*Requires Nuix.Features: PRODUCTION_SET*

Annotates a document ID list to add production set names to it.


|Parameter                            |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:------------------------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ProductionSetName<br/>_ProductionSet_|`string`|✔       |1       |                         |               |The production set to get names from.                                                                                                                                                        |
|DataPath<br/>_IdList_                |`string`|✔       |2       |                         |               |Specifies the file path of the document ID list.                                                                                                                                             |
|CasePath<br/>_Directory_             |`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
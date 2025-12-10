---
title: NuixImportDocumentIds Step | Nuix Connector Documentation
sidebar_label: NuixImportDocumentIds
description: Imports the given document IDs into this production set. Only works if this production set has imported numbering.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixImportDocumentIds
_Alias_:`NuixImportDocumentIds`

_Output_:`Unit`

*Requires Nuix.Version 7.4*

*Requires Nuix.Features: PRODUCTION_SET*

Imports the given document IDs into this production set. Only works if this production set has imported numbering.


|Parameter                                        |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:------------------------------------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ProductionSetName<br/>_ProductionSet_            |`string`|✔       |1       |                         |               |The production set to add results to.                                                                                                                                                        |
|DataPath<br/>_FromList_                          |`string`|✔       |2       |                         |               |Specifies the file path of the document ID list.                                                                                                                                             |
|AreSourceProductionSetsInData<br/>_SetNameInList_|`bool`  |        |3       |false                    |               |Specifies that the source production set name(s) are contained in the document ID list.                                                                                                      |
|CasePath<br/>_Directory_                         |`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
---
title: NuixCreateIrregularItemsReport Step | Nuix Connector Documentation
sidebar_label: NuixCreateIrregularItemsReport
description: Creates a list of all irregular items in a case. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixCreateIrregularItemsReport
_Alias_:`NuixCreateIrregularItemsReport`

_Output_:`StringStream`

*Requires Nuix.Version 5.0*

Creates a list of all irregular items in a case. The report is in CSV format. The headers are 'Reason', 'Path' and 'Guid' Reasons include 'NonSearchablePDF','BadExtension','Unrecognised','Unsupported','TextNotIndexed','ImagesNotProcessed','Poisoned','Record','UnrecognisedDeleted','NeedManualExamination', and 'CodeTextFiles' Use this inside a WriteFile step to write it to a file.


|Parameter               |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:-----------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CasePath<br/>_Directory_|`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
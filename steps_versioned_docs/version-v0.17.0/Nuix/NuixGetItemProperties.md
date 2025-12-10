---
title: NuixGetItemProperties Step | Nuix Connector Documentation
sidebar_label: NuixGetItemProperties
description: A step that the searches a case for items and outputs the values of item properties. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixGetItemProperties
_Alias_:`NuixGetItemProperties`

_Output_:`StringStream`

*Requires Nuix.Version 6.2*

A step that the searches a case for items and outputs the values of item properties. The report is in CSV format. The headers are 'Key', 'Value', 'Path' and 'Guid' Use this inside a WriteFile step to write it to a file.


|Parameter                   |Type                                |Required|Position|Default Value              |Example        |Summary                                                                                                                                                                                                                                                                           |
|:---------------------------|:----------------------------------:|:------:|:------:|:-------------------------:|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SearchTerm<br/>_Search_     |`string`                            |✔       |1       |                           |\*.txt         |The Nuix search query. For more details on the supported syntax, please see the Nuix Workstation Search Guide.                                                                                                                                                                    |
|PropertyRegex<br/>_Filter_  |`string`                            |✔       |2       |                           |Date           |The regex to search the property for.                                                                                                                                                                                                                                             |
|ValueRegex<br/>_ValueFilter_|`string`                            |        |3       |All values will be returned|(199\\d)       |An optional regex to check the value. If this is set, only values which match this regex will be returned, and only the contents of the first capture group.                                                                                                                      |
|CasePath<br/>_Directory_    |`string`                            |        |        |Use the current open case  |C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.                                                                                     |
|SearchOptions               |`entity`                            |        |        |No search options provided |               |Pass additional search options to nuix. For an unsorted search (default) the only available option is defaultFields. When using SortSearch=true the options are defaultFields, order, and limit. Please see the nuix API for Case.search and Case.searchUnsorted for more details.|
|SearchType                  |[SearchType](../Enums/SearchType.md)|        |        |ItemsOnly                  |               |Defines the type of search that is done. By default only the items responsive to the search terms are tagged, but the result set can be augmented using this parameter.                                                                                                           |
|SortSearch                  |`bool`                              |        |        |false                      |               |By default the search is not sorted by relevance which increases performance. Set this to true to sort the search by relevance and enabling additional SearchOptions.                                                                                                             |
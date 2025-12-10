---
title: NuixPerformOCR Step | Nuix Connector Documentation
sidebar_label: NuixPerformOCR
description: Performs optical character recognition on items in a NUIX case.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixPerformOCR
_Alias_:`NuixPerformOCR`

_Output_:`Unit`

*Requires Nuix.Version 7.8*

*Requires Nuix.Features: OCR_PROCESSING*

Performs optical character recognition on items in a NUIX case.


|Parameter                       |Type                                |Required|Position|Default Value                    |Example                    |Requirements|Summary                                                                                                                                                                                                                                                                           |
|:-------------------------------|:----------------------------------:|:------:|:------:|:-------------------------------:|:-------------------------:|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SearchTerm<br/>_Search_         |`string`                            |✔       |1       |                                 |\*.txt                     |            |The search query used for searching for items to OCR.                                                                                                                                                                                                                             |
|CasePath<br/>_Directory_        |`string`                            |        |        |Use the current open case        |C:/Cases/MyCase            |            |The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.                                                                                     |
|OCRProfileName<br/>_Profile_    |`string`                            |        |        |The Default profile will be used.|MyOcrProfile               |            |The name of the OCR profile to use. This cannot be set at the same time as OCRProfilePath.                                                                                                                                                                                        |
|OCRProfilePath<br/>_ProfilePath_|`string`                            |        |        |The Default profile will be used.|C:\\Profiles\\MyProfile.xml|Version 7.6 |Path to the OCR profile to use. This cannot be set at the same times as OCRProfileName.                                                                                                                                                                                           |
|SearchOptions                   |`entity`                            |        |        |No search options provided       |                           |            |Pass additional search options to nuix. For an unsorted search (default) the only available option is defaultFields. When using SortSearch=true the options are defaultFields, order, and limit. Please see the nuix API for Case.search and Case.searchUnsorted for more details.|
|SearchType                      |[SearchType](../Enums/SearchType.md)|        |        |ItemsOnly                        |                           |            |Defines the type of search that is done. By default only the items responsive to the search terms are tagged, but the result set can be augmented using this parameter.                                                                                                           |
|SortSearch                      |`bool`                              |        |        |false                            |                           |            |By default the search is not sorted by relevance which increases performance. Set this to true to sort the search by relevance and enabling additional SearchOptions.                                                                                                             |
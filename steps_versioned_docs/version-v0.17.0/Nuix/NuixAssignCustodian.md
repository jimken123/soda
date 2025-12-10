---
title: NuixAssignCustodian Step | Nuix Connector Documentation
sidebar_label: NuixAssignCustodian
description: Run a search query on a nuix case and assign found items to a custodian.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixAssignCustodian
_Alias_:`NuixAssignCustodian`

_Output_:`Unit`

*Requires Nuix.Version 5.0*

*Requires Nuix.Features: ANALYSIS*

Run a search query on a nuix case and assign found items to a custodian.


|Parameter               |Type                                |Required|Position|Default Value             |Example        |Summary                                                                                                                                                                                                                                                                           |
|:-----------------------|:----------------------------------:|:------:|:------:|:------------------------:|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SearchTerm<br/>_Search_ |`string`                            |✔       |1       |                          |\*.txt         |The Nuix search query. For more details on the supported syntax, please see the Nuix Workstation Search Guide.                                                                                                                                                                    |
|Custodian               |`string`                            |✔       |2       |                          |               |The custodian to assign.                                                                                                                                                                                                                                                          |
|CasePath<br/>_Directory_|`string`                            |        |        |Use the current open case |C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.                                                                                     |
|SearchOptions           |`entity`                            |        |        |No search options provided|               |Pass additional search options to nuix. For an unsorted search (default) the only available option is defaultFields. When using SortSearch=true the options are defaultFields, order, and limit. Please see the nuix API for Case.search and Case.searchUnsorted for more details.|
|SearchType              |[SearchType](../Enums/SearchType.md)|        |        |ItemsOnly                 |               |Defines the type of search that is done. By default only the items responsive to the search terms are tagged, but the result set can be augmented using this parameter.                                                                                                           |
|SortSearch              |`bool`                              |        |        |false                     |               |By default the search is not sorted by relevance which increases performance. Set this to true to sort the search by relevance and enabling additional SearchOptions.                                                                                                             |
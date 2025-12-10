---
title: NuixRemoveFromItemSet Step | Nuix Connector Documentation
sidebar_label: NuixRemoveFromItemSet
description: Removes particular items from a Nuix item set.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixRemoveFromItemSet
_Alias_:`NuixRemoveFromItemSet`

_Output_:`Unit`

*Requires Nuix.Version 7.0*

*Requires Nuix.Features: ANALYSIS*

Removes particular items from a Nuix item set.


|Parameter                |Type                                |Required|Position|Default Value             |Example        |Summary                                                                                                                                                                                                                                                                           |
|:------------------------|:----------------------------------:|:------:|:------:|:------------------------:|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ItemSetName<br/>_ItemSet_|`string`                            |✔       |1       |                          |               |The name of the item set to remove results from.                                                                                                                                                                                                                                  |
|SearchTerm<br/>_Search_  |`string`                            |✔       |2       |                          |Tag:sushi      |The search term to use for choosing which items to remove.                                                                                                                                                                                                                        |
|CasePath<br/>_Directory_ |`string`                            |        |        |Use the current open case |C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.                                                                                     |
|RemoveDuplicates         |`bool`                              |        |        |true                      |               |If true (default), duplicates of (top-level and above-top-level) originals are removed. When false, only the found items are removed causing new originals to be chosen from the remaining duplicates.                                                                            |
|SearchOptions            |`entity`                            |        |        |No search options provided|               |Pass additional search options to nuix. For an unsorted search (default) the only available option is defaultFields. When using SortSearch=true the options are defaultFields, order, and limit. Please see the nuix API for Case.search and Case.searchUnsorted for more details.|
|SearchType               |[SearchType](../Enums/SearchType.md)|        |        |ItemsOnly                 |               |Defines the type of search that is done. By default only the items responsive to the search terms are tagged, but the result set can be augmented using this parameter.                                                                                                           |
|SortSearch               |`bool`                              |        |        |false                     |               |By default the search is not sorted by relevance which increases performance. Set this to true to sort the search by relevance and enabling additional SearchOptions.                                                                                                             |
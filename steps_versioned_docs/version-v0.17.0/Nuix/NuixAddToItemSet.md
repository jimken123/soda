---
title: NuixAddToItemSet Step | Nuix Connector Documentation
sidebar_label: NuixAddToItemSet
description: Run a search query in Nuix and add all items found to an item set. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixAddToItemSet
_Alias_:`NuixAddToItemSet`, `NuixCreateItemSet`

_Output_:`Unit`

*Requires Nuix.Version 5.0*

*Requires Nuix.Features: ANALYSIS*

Run a search query in Nuix and add all items found to an item set. Will create a new item set if one doesn't already exist.


|Parameter                                  |Type                                                    |Required|Position|Default Value                            |Example        |Summary                                                                                                                                                                                                                                                                                |
|:------------------------------------------|:------------------------------------------------------:|:------:|:------:|:---------------------------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SearchTerm<br/>_Search_                    |`string`                                                |✔       |1       |                                         |\*.txt         |The Nuix search query. For more details on the supported syntax, please see the Nuix Workstation Search Guide.                                                                                                                                                                         |
|ItemSetName<br/>_Set_                      |`string`                                                |✔       |2       |                                         |               |The item set to add results to. Will be created if it doesn't already exist.                                                                                                                                                                                                           |
|ItemSetDeduplication<br/>_DeduplicateUsing_|[ItemSetDeduplication](../Enums/ItemSetDeduplication.md)|        |3       |MD5                                      |               |The means of deduplicating items by key and prioritizing originals in a tie-break. This parameter only has an effect if Item Set does not exist and is created by this step.                                                                                                           |
|ItemSetDescription<br/>_Description_       |`string`                                                |        |4       |No description                           |               |The description of the item set. This parameter only has an effect if Item Set does not exist and is created by this step.                                                                                                                                                             |
|DeduplicateBy                              |[DeduplicateBy](../Enums/DeduplicateBy.md)              |        |5       |Individual                               |               |Whether to deduplicate as a family or individual. This parameter only has an effect if Item Set does not exist and is created by this step.                                                                                                                                            |
|CustodianRanking                           |`array<string>`                                         |        |6       |Do not rank custodians                   |               |A list of custodian names ordered from highest ranked to lowest ranked. If this parameter is present and the deduplication parameter has not been specified, MD5 Ranked Custodian is assumed. This parameter only has an effect if Item Set does not exist and is created by this step.|
|CasePath<br/>_Directory_                   |`string`                                                |        |        |Use the current open case                |C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.                                                                                          |
|ItemSortOrder<br/>_SortItemsBy_            |[ItemSortOrder](../Enums/ItemSortOrder.md)              |        |        |Unsorted or by relevance. See SortSearch.|               |Sort items before adding them to the production set.                                                                                                                                                                                                                                   |
|SearchOptions                              |`entity`                                                |        |        |No search options provided               |               |Pass additional search options to nuix. For an unsorted search (default) the only available option is defaultFields. When using SortSearch=true the options are defaultFields, order, and limit. Please see the nuix API for Case.search and Case.searchUnsorted for more details.     |
|SearchType                                 |[SearchType](../Enums/SearchType.md)                    |        |        |ItemsOnly                                |               |Defines the type of search that is done. By default only the items responsive to the search terms are tagged, but the result set can be augmented using this parameter.                                                                                                                |
|SortSearch                                 |`bool`                                                  |        |        |false                                    |               |By default the search is not sorted by relevance which increases performance. Set this to true to sort the search by relevance and enabling additional SearchOptions.                                                                                                                  |
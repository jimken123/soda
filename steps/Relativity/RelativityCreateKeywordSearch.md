---
title: RelativityCreateKeywordSearch Step | Phoenix Connector for Relativity Documentation
sidebar_label: RelativityCreateKeywordSearch
description: Creates a keyword search. Returns the artifact id of the created search.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityCreateKeywordSearch
_Alias_:`RelativityCreateKeywordSearch`

_Output_:`SCLInt`

Creates a keyword search. Returns the artifact id of the created search.


|Parameter              |Type                                  |Required|Position|Default Value                                             |Summary                                                                    |
|:----------------------|:------------------------------------:|:------:|:------:|:--------------------------------------------------------:|:--------------------------------------------------------------------------|
|Workspace              |`int` or `string`                     |✔       |1       |                                                          |The Workspace to search. You can provide either the Artifact Id or the name|
|SearchName             |`string`                              |✔       |2       |                                                          |The name of the new search                                                 |
|SearchText             |`string`                              |✔       |3       |                                                          |Search terms                                                               |
|SortByRank             |`bool`                                |✔       |4       |                                                          |Indicates that the search results must be sorted by rank.                  |
|Fields                 |`array<int>` or `array<string>`       |✔       |5       |                                                          |The fields of the search You can provide either the ArtifactId or the name |
|Notes                  |`string`                              |        |6       |                                                          |                                                                           |
|Keywords               |`string`                              |        |7       |                                                          |An optional field where extra group information may be recorded.           |
|Scope                  |[SearchScope](../Enums/SearchScope.md)|        |8       |EntireCase                                                |The scope of the search                                                    |
|SearchFolderArtifactIds|`array<int>`                          |        |9       |Do not specify any folders - for searching the entire case|Artifact ids of the folders to search                                      |
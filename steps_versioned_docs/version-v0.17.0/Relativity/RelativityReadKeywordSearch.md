---
title: RelativityReadKeywordSearch Step | Phoenix Connector for Relativity Documentation
sidebar_label: RelativityReadKeywordSearch
description: Reads a search. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityReadKeywordSearch
_Alias_:`RelativityReadKeywordSearch`

_Output_:`Entity`

Reads a search


|Parameter|Type             |Required|Position|Summary                                                                                |
|:--------|:---------------:|:------:|:------:|:--------------------------------------------------------------------------------------|
|Workspace|`int` or `string`|✔       |1       |The Workspace containing the search. You can provide either the Artifact Id or the name|
|SearchId |`int`            |✔       |2       |The Id of the search to read                                                           |
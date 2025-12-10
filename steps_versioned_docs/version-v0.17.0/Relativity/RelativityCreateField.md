---
title: RelativityCreateField Step | Phoenix Connector for Relativity Documentation
sidebar_label: RelativityCreateField
description: Creates a new Fixed Length Field and returns the ArtifactId of that field. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityCreateField
_Alias_:`RelativityCreateField`

_Output_:`SCLInt`

Creates a new Fixed Length Field and returns the ArtifactId of that field


|Parameter|Type             |Required|Position|Default Value|Summary                                                                                              |
|:--------|:---------------:|:------:|:------:|:-----------:|:----------------------------------------------------------------------------------------------------|
|Workspace|`int` or `string`|✔       |1       |             |The Workspace where you want to create the folder. You can provide either the Artifact Id or the name|
|FieldName|`string`         |✔       |2       |             |The Name for the field                                                                               |
|Length   |`int`            |        |3       |100          |The length of the field                                                                              |
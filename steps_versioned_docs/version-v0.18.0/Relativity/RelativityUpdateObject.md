---
title: RelativityUpdateObject Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityUpdateObject
description: Update a Relativity Object. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityUpdateObject
_Alias_:`RelativityUpdateObject`

_Output_:`Unit`

Update a Relativity Object


|Parameter       |Type                                          |Required|Position|Default Value|Summary                                                                                                                                            |
|:---------------|:--------------------------------------------:|:------:|:------:|:-----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------|
|Workspace       |`int` or `string`                             |✔       |1       |             |The Workspace containing the folder. You can provide either the Artifact Id or the name                                                            |
|ObjectArtifactId|`int`                                         |✔       |2       |             |The artifact id of the object to update                                                                                                            |
|FieldValues     |`entity`                                      |✔       |3       |             |The updated values to use                                                                                                                          |
|UpdateBehaviour |[UpdateBehaviour](../Enums/UpdateBehaviour.md)|        |4       |Merge        |indicates whether you want to replace or merge a choice or object. These options are available for only multiple choice and multiple object fields.|
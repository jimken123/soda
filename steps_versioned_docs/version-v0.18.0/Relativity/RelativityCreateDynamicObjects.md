---
title: RelativityCreateDynamicObjects Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityCreateDynamicObjects
description: Create a relativity dynamic objects from entities. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityCreateDynamicObjects
_Alias_:`RelativityCreateDynamicObjects`

_Output_:`Array<T>`

Create a relativity dynamic objects from entities. Returns an array of the new artifact ids


|Parameter       |Type                                             |Required|Position|Default Value     |Summary                                                                                               |
|:---------------|:-----------------------------------------------:|:------:|:------:|:----------------:|:-----------------------------------------------------------------------------------------------------|
|Workspace       |`int` or `string`                                |✔       |1       |                  |The Workspace where you want to create the objects. You can provide either the Artifact Id or the name|
|Entities        |`array<entity>`                                  |✔       |2       |                  |The entities to import                                                                                |
|ArtifactType    |[ArtifactType](../Enums/ArtifactType.md) or `int`|✔       |3       |                  |The type of the object to create                                                                      |
|ParentArtifactId|`int`                                            |        |4       |The Workspace Root|The artifact Id of the parent object                                                                  |
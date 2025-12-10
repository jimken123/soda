---
title: RunExternalProcess Step | Core SDK Documentation
sidebar_label: RunExternalProcess
description: Runs an external executable program.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# RunExternalProcess
_Alias_:`RunExternalProcess`, `ProcessStart`, `StartProcess`

_Output_:`Unit`

Runs an external executable program.


|Parameter|Type                                    |Required|Position|Default Value   |Summary                                |
|:--------|:--------------------------------------:|:------:|:------:|:--------------:|:--------------------------------------|
|Path     |`string`                                |✔       |1       |                |The path to the external process       |
|Arguments|`array<string>`                         |        |2       |No arguments    |Arguments to the step.                 |
|Encoding |[EncodingEnum](../Enums/EncodingEnum.md)|        |3       |Default encoding|Encoding to use for the process output.|
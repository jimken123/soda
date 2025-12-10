---
title: RelativityCreateMatter Step | Sequence Connector for Relativity Documentation
sidebar_label: RelativityCreateMatter
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Relativity]
hide_title: true
hide_table_of_contents: true
---

# RelativityCreateMatter
_Alias_:`RelativityCreateMatter`

_Output_:`SCLInt`


|Parameter |Type                                             |Required|Position|Summary                         |
|:---------|:-----------------------------------------------:|:------:|:------:|:-------------------------------|
|Client    |`int` or `string`                                |✔       |1       |                                |
|Status    |`int` or [MatterStatus](../Enums/MatterStatus.md)|✔       |2       |                                |
|MatterName|`string`                                         |✔       |3       |The name of the matter to create|
|Number    |`string`                                         |✔       |4       |The number field                |
|Keywords  |`string`                                         |✔       |5       |The keywords                    |
|Notes     |`string`                                         |✔       |6       |The notes                       |
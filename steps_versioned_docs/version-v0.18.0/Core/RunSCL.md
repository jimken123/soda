---
title: RunSCL Step | Core SDK Documentation
sidebar_label: RunSCL
description: Runs SCL defined in a StringStream. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# RunSCL
_Alias_:`RunSCL`

_Output_:`Unit`

Runs SCL defined in a StringStream


|Parameter|Type           |Required|Position|Default Value|Summary                         |
|:--------|:-------------:|:------:|:------:|:-----------:|:-------------------------------|
|SCL      |`string`       |✔       |1       |             |The SCL to run                  |
|Export   |`array<string>`|        |2       |Empty        |The names of variables to export|
---
title: PathCombine Step | File System Connector Documentation
sidebar_label: PathCombine
description: Combine Paths. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# PathCombine
_Alias_:`PathCombine`, `JoinPath`, `ResolvePath`

_Output_:`StringStream`

Combine Paths. If the resulting path is not fully qualified it will be prefixed with the current working directory.


|Parameter|Type           |Required|Position|Summary              |
|:--------|:-------------:|:------:|:------:|:--------------------|
|Paths    |`array<string>`|✔       |1       |The paths to combine.|
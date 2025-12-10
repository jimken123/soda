---
title: DirectoryCreate Step | File System Connector Documentation
sidebar_label: DirectoryCreate
description: Creates a new directory in the file system. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# DirectoryCreate
_Alias_:`DirectoryCreate`, `mkdir`, `CreateDirectory`

_Output_:`Unit`

Creates a new directory in the file system. Will create all directories and subdirectories in the specified path unless they already exist.


|Parameter|Type    |Required|Position|Summary                             |
|:--------|:------:|:------:|:------:|:-----------------------------------|
|Path     |`string`|✔       |1       |The path to the directory to create.|
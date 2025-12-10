---
title: NuixRunScript Step | Nuix Connector Documentation
sidebar_label: NuixRunScript
description: Run an arbitrary ruby script in nuix. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixRunScript
_Alias_:`NuixRunScript`

_Output_:`StringStream`

Run an arbitrary ruby script in nuix. It should return a string.


|Parameter            |Type           |Required|Position|Default Value         |Requirements|Summary                                                                                                                                |
|:--------------------|:-------------:|:------:|:------:|:--------------------:|:----------:|:--------------------------------------------------------------------------------------------------------------------------------------|
|FunctionName         |`string`       |✔       |1       |                      |Version 8.2 |What to call this function. This will have spaces replaced with underscores and the first character will be made lowercase             |
|ScriptText           |`string`       |✔       |2       |                      |            |The text of the script to run                                                                                                          |
|Parameters           |`entity`       |✔       |3       |                      |            |Parameters to send to the script. You can access these by name (with spaces replaced by underscores and the first character lowercase).|
|EntityStreamParameter|`array<entity>`|        |4       |Do not stream entities|            |Entities to stream to the script. The parameter name is 'entityStream'                                                                 |
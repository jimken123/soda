---
title: PwshRunScript Step | PowerShell Connector Documentation
sidebar_label: PwshRunScript
description: Executes a powershell script.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Pwsh]
hide_title: true
hide_table_of_contents: true
---

# PwshRunScript
_Alias_:`PwshRunScript`, `PwshRun`, `PowerShellRun`, `PowerShellRunScript`

_Output_:`Unit`

Executes a powershell script.


|Parameter                                       |Type    |Required|Position|Default Value                    |Summary                                          |
|:-----------------------------------------------|:------:|:------:|:------:|:-------------------------------:|:------------------------------------------------|
|Script                                          |`string`|✔       |1       |                                 |The script to run                                |
|Variables<br/>_SetVariables_<br/>_WithVariables_|`entity`|        |2       |No variables passed to the script|List of input variables and corresponding values.|
---
title: PwshRunScriptAsync Step | PowerShell Connector Documentation
sidebar_label: PwshRunScriptAsync
description: Executes a powershell script and returns any results written to the pipeline. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Pwsh]
hide_title: true
hide_table_of_contents: true
---

# PwshRunScriptAsync
_Alias_:`PwshRunScriptAsync`, `PwshRunAsync`, `PowerShellRunAsync`, `PowerShellRunScriptAsync`

_Output_:`Array<T>`

Executes a powershell script and returns any results written to the pipeline as an entity stream. Running a script asynchronously allows for input streaming. Note that the script only runs when the output of this Step is read.


|Parameter                                       |Type           |Required|Position|Default Value                    |Summary                                                                                                     |
|:-----------------------------------------------|:-------------:|:------:|:------:|:-------------------------------:|:-----------------------------------------------------------------------------------------------------------|
|Script                                          |`string`       |✔       |1       |                                 |The script to run                                                                                           |
|Variables<br/>_SetVariables_<br/>_WithVariables_|`entity`       |        |2       |No variables passed to the script|List of input variables and corresponding values.                                                           |
|Input<br/>_InputStream_                         |`array<entity>`|        |3       |No input stream                  |Input stream, used to pipeline data to the Script. This stream is exposed via the automatic variable $input.|
---
title: AutopsyCreateNewCase Step | TSK Connector Documentation
sidebar_label: AutopsyCreateNewCase
description: Creates a new Autopsy Case. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, TSK]
hide_title: true
hide_table_of_contents: true
---

# AutopsyCreateNewCase
_Alias_:`AutopsyCreateNewCase`

_Output_:`Unit`

Creates a new Autopsy Case


|Parameter        |Type                                          |Required|Position|Default Value                       |Summary                                                                                                                                                                            |
|:----------------|:--------------------------------------------:|:------:|:------:|:----------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CaseName         |`string`                                      |✔       |1       |                                    |The name of the case to create                                                                                                                                                     |
|CaseBaseDirectory|`string`                                      |✔       |2       |                                    |The Directory into which to put the case files                                                                                                                                     |
|CaseType         |[AutopsyCaseType](../Enums/AutopsyCaseType.md)|        |3       |No Case Type Specified              |The Type of Case to Create                                                                                                                                                         |
|DataSourcePath   |`string`                                      |        |4       |Do not add a Data Source            |The Path to the Data Source to add                                                                                                                                                 |
|IngestProfileName|`string`                                      |        |5       |The data source will not be ingested|The Path to the Ingest Profile Name. If this is not given, the data source will be added but not ingested. If this is an empty string then the default ingest profile will be used.|
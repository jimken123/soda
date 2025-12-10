---
title: AutopsyAddDataSource Step | TSK Connector Documentation
sidebar_label: AutopsyAddDataSource
description: Add a Data Source to an Autopsy Case. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, TSK]
hide_title: true
hide_table_of_contents: true
---

# AutopsyAddDataSource
_Alias_:`AutopsyAddDataSource`

_Output_:`Unit`

Add a Data Source to an Autopsy Case


|Parameter        |Type    |Required|Position|Default Value                       |Summary                                                                                                                                                                            |
|:----------------|:------:|:------:|:------:|:----------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CaseDirectory    |`string`|✔       |1       |                                    |The Directory containing the case                                                                                                                                                  |
|DataSourcePath   |`string`|✔       |2       |                                    |The Path to the Data Source                                                                                                                                                        |
|IngestProfileName|`string`|        |3       |The data source will not be ingested|The Path to the Ingest Profile Name. If this is not given, the data source will be added but not ingested. If this is an empty string then the default ingest profile will be used.|
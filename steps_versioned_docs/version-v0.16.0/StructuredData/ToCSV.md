---
title: ToCSV Step | Structured Data Connector Documentation
sidebar_label: ToCSV
description: Write entities to a stream in CSV format. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, StructuredData]
hide_title: true
hide_table_of_contents: true
---

# ToCSV
_Alias_:`ToCSV`, `ConvertEntityToCSV`

_Output_:`StringStream`

Write entities to a stream in CSV format. The same as ToConcordance but with different default values.


|Parameter          |Type                                    |Required|Position|Default Value                                                  |Example            |Summary                                                                                                                                             |
|:------------------|:--------------------------------------:|:------:|:------:|:-------------------------------------------------------------:|:-----------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|Entities           |`array<entity>`                         |✔       |1       |                                                               |                   |The entities to write.                                                                                                                              |
|Encoding           |[EncodingEnum](../Enums/EncodingEnum.md)|        |2       |UTF8 no BOM                                                    |                   |How the stream should be encoded.                                                                                                                   |
|Delimiter          |`string`                                |        |3       |,                                                              |                   |The delimiter to use to separate fields.                                                                                                            |
|QuoteCharacter     |`string`                                |        |4       |"                                                              |                   |The quote character to use. Should be a single character or an empty string. If it is empty then strings cannot be quoted.                          |
|AlwaysQuote        |`bool`                                  |        |5       |false                                                          |                   |Whether to always quote all fields and headers.                                                                                                     |
|MultiValueDelimiter|`string`                                |        |6       |                                                               |                   |The multi value delimiter character to use. Should be a single character or an empty string. If it is empty then fields cannot have multiple fields.|
|DateTimeFormat     |`string`                                |        |7       |O - ISO 8601 compliant - e.g. 2009-06-15T13:45:30.0000000-07:00|yyyy/MM/dd HH:mm:ss|The format to use for DateTime fields.                                                                                                              |
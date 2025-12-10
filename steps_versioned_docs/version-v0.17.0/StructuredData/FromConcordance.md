---
title: FromConcordance Step | Structured Data Connector Documentation
sidebar_label: FromConcordance
description: Extracts entities from a Concordance stream. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, StructuredData]
hide_title: true
hide_table_of_contents: true
---

# FromConcordance
_Alias_:`FromConcordance`, `ConvertConcordanceToEntity`

_Output_:`Array<T>`

Extracts entities from a Concordance stream. The same as FromCSV but with different default values.


|Parameter          |Type    |Required|Position|Default Value|Summary                                                                                                                                             |
|:------------------|:------:|:------:|:------:|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|Stream             |`string`|✔       |1       |             |Stream containing the CSV data.                                                                                                                     |
|Delimiter          |`string`|        |2       |\\u0014 - DC4|The delimiter to use to separate fields.                                                                                                            |
|QuoteCharacter     |`string`|        |3       |þ            |The quote character to use. Should be a single character or an empty string. If it is empty then strings cannot be quoted.                          |
|MultiValueDelimiter|`string`|        |4       |\\\|         |The multi value delimiter character to use. Should be a single character or an empty string. If it is empty then fields cannot have multiple fields.|
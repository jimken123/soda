---
title: FromCSV Step | Structured Data Connector Documentation
sidebar_label: FromCSV
description: Extracts entities from a CSV stream. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, StructuredData]
hide_title: true
hide_table_of_contents: true
---

# FromCSV
_Alias_:`FromCSV`, `ConvertCSVToEntity`

_Output_:`Array<T>`

Extracts entities from a CSV stream. The same as FromConcordance but with different default values.


|Parameter          |Type    |Required|Position|Default Value|Summary                                                                                                                                             |
|:------------------|:------:|:------:|:------:|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|Stream             |`string`|✔       |1       |             |Stream containing the CSV data.                                                                                                                     |
|Delimiter          |`string`|        |2       |,            |The delimiter to use to separate fields.                                                                                                            |
|CommentCharacter   |`string`|        |3       |#            |The token to use to indicate comments. Must be a single character, or an empty string. If it is empty, then comments cannot be indicated            |
|QuoteCharacter     |`string`|        |4       |"            |The quote character to use. Should be a single character or an empty string. If it is empty then strings cannot be quoted.                          |
|MultiValueDelimiter|`string`|        |5       |             |The multi value delimiter character to use. Should be a single character or an empty string. If it is empty then fields cannot have multiple fields.|
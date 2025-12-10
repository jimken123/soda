---
title: GetImageFormat Step | Tesseract OCR Connector Documentation
sidebar_label: GetImageFormat
description: Gets the image format implied by the file extension of the file name. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Tesseract]
hide_title: true
hide_table_of_contents: true
---

# GetImageFormat
_Alias_:`GetImageFormat`

_Output_:`SCLEnum<T>`

Gets the image format implied by the file extension of the file name. Note that this does not actually look at the file.


|Parameter|Type    |Required|Position|Summary                   |
|:--------|:------:|:------:|:------:|:-------------------------|
|FileName |`string`|✔       |1       |The name of the image file|
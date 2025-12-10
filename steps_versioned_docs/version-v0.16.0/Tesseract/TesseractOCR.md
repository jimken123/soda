---
title: TesseractOCR Step | Tesseract OCR Connector Documentation
sidebar_label: TesseractOCR
description: Returns true if the file in the specified path exists, false otherwise. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Tesseract]
hide_title: true
hide_table_of_contents: true
---

# TesseractOCR
_Alias_:`TesseractOCR`

_Output_:`StringStream`

Returns true if the file in the specified path exists, false otherwise


|Parameter               |Type                                  |Required|Position|Default Value|Summary                |
|:-----------------------|:------------------------------------:|:------:|:------:|:-----------:|:----------------------|
|ImageData<br/>_File_    |`string`                              |✔       |1       |             |The image data to OCR  |
|ImageFormat<br/>_Format_|[ImageFormat](../Enums/ImageFormat.md)|        |2       |Default      |The format of the image|
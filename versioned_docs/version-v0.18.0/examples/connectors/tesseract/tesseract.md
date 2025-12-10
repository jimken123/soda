---
sidebar_label: Tesseract Connector
sidebar_position: 0
description: Learn how to include Tesseract OCR in automated forensic and ediscovery workflows.
---

# Tesseract Connector Examples

## Setup

1. Download and set up Phoenix. See the [quick start](../../../quick-start.md) for more info.
2. Add the Tesseract connector. See [connectors](../../../quick-start.md#connectors)
   for more info on managing connectors.

```powershell
./Phoenix.exe connector add Phoenix.Connectors.Tesseract --prerelease
```

## Examples

### OCR a bitmap image

```scl
- <path> = 'MyImage.bmp'
- <imageData> = FileRead <path>
- <imageFormat> = GetImageFormat <path>
- <imageText> = TesseractOCR <imageData> <imageFormat>
- Print <imageText>
```

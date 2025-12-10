---
title: Download CSV | PowerShell Connector Examples
sidebar_label: Download CSV
---

# Download CSV

[Instructions on how to install and setup Sequence and the PowerShell Connector.](powershell.md)

This powershell connector Sequence can be used to download
a copy of the `artwork_data.csv` which is used in some of the
other examples.

```scl
- <DataUri> = 'https://raw.githubusercontent.com/tategallery/collection/master/artwork_data.csv'
- PwshRunScript '
    $fileName = Split-Path $DataUri -Leaf
    Invoke-WebRequest -Uri $DataUri -OutFile $fileName -UseBasicParsing
  '
  Variables: (DataUri: <DataUri>)
```

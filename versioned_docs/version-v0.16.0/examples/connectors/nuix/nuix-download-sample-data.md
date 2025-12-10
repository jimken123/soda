---
title: Download Sample Data | Nuix Connector Examples
sidebar_label: Download Sample Data
---

# Download Sample Data

This SCL will:

1. Create a new directory `./data` in the current directory
2. Download the [EDRM Micro Dataset](https://edrm.net/resources/data-sets/edrm-micro-datasets/)
   and extract it into the `./data` directory.
3. Download an [encrypted PDF from the Nuix.Tests project](https://gitlab.com/sequence/connectors/nuix/-/blob/main/Nuix.Tests/AllData/encrypted.pdf)
   into the `./data/EDRM specific data` directory.

## Setup

[Instructions on how to install and setup Sequence and the Nuix Connector.](nuix.md)

To run this SCL, add the [PowerShell connector](../../../connectors/powershell.md) by running:

```powershell
./sequence.exe connector add Sequence.Connectors.Pwsh
```

## SCL

Download the SCL here: [nuix-download-sample-data.scl](pathname:///example-files/nuix/nuix-download-sample-data.scl)

To run:

```powershell
PS > ./sequence.exe run nuix-download-sample-data.scl
```

```scl
- <output> = './data'
- AssertTrue (Not (DoesDirectoryExist <output>))
- If (Not (DoesDirectoryExist <output>)) (CreateDirectory <output>)
- <edrm> = PathCombine [<output>, 'edrm.zip']
- <encrypted> = PathCombine [<output>, 'encrypted.pdf']
- PwshRunScript
    Variables: (
      EdrmMicroUrl: 'https://www.edrm.net/download/28896/'
      EdrmMicroPath: <edrm>
      EncryptedUrl: 'https://gitlab.com/sequence/connectors/nuix/-/raw/main/Nuix.Tests/AllData/encrypted.pdf?inline=false'
      EncryptedPath: <encrypted>
    )
    Script: '
      Invoke-WebRequest -Uri $EdrmMicroUrl -OutFile $EdrmMicroPath -UseBasicParsing
      Invoke-WebRequest -Uri $EncryptedUrl -OutFile $EncryptedPath -UseBasicParsing
    '
- FileExtract <edrm> <output>
- DeleteItem <edrm>
- AssertTrue (DoesDirectoryExist (PathCombine [<output>, 'EDRM specific data']))
- FileMove <encrypted> (PathCombine [<output>, 'EDRM specific data/encrypted.pdf'])
- AssertTrue (DoesDirectoryExist (PathCombine [<output>, 'Data from public websites']))
- Log $"Successfully downloaded example data to {<output>}"
```

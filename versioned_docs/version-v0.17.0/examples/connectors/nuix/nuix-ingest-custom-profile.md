---
title: Ingest Using a Custom Processing Profile Configured in SCL | Nuix Connector Examples
sidebar_label: Ingest Using a Custom Processing Profile Configured in SCL
---

# Ingest Using a Custom Processing Profile Configured in SCL

This example ingests evidence into an existing Nuix case. The
processing profile is fully configured using SCL and different
text processing options are defined for a number of mime types.

## Setup

[Instructions on how to install and setup Phoenix and the Nuix Connector.](nuix.md)

To download and setup the data for this example, use the SCL from
[this example](nuix-download-sample-data.md) then run the
[Create Case, Ingest and Filter](nuix-create-ingest-filter.md)
example to create the case.

Manual steps:

1. Download the [EDRM Micro Dataset](https://edrm.net/resources/data-sets/edrm-micro-datasets/)
   and extract to the `./data` directory.
2. To test encrypted file export, a PDF is available
   [here](https://gitlab.com/Phoenix/connectors/nuix/-/blob/main/Nuix.Tests/AllData/encrypted.pdf).
   Once downloaded, place it into `./data/EDRM specific data`
3. Run this example to create the case: [Create Case, Ingest and Filter](nuix-create-ingest-filter.md)

## SCL

Download the SCL here: [nuix-ingest-custom-profile.scl](pathname:///example-files/nuix/nuix-ingest-custom-profile.scl)

To run:

```powershell
PS > ./Phoenix.exe run nuix-ingest-custom-profile.scl
```

Details of the case and the evidence can be customised by updating the relavant
[entity](../../../entities.md) properties. `Evidence`, `SearchAndExclude`
and `SearchAndTag` are [arrays](../../../sequence-configuration-language.md#arrays),
so more evidence and/or searches can be added by adding additional entities to
these arrays.

```scl
################################################################################
# Path to an existing case
- <CasePath> = './ingest-filter'

# Evidence folders or files to add to the case.
# The container has to be unique and can't already exist
- <Evidence> = [
    (
      Custodian: 'Custodian A'
      Container: 'CASE01B00002'
      Paths: [ './data/EDRM specific data' ]
      Encoding: 'UTF-8'
      TimeZone: 'UTC'
    )
    (
      Custodian: 'Custodian B'
      Container: 'CASE01B00003'
      Paths: [ './data/Data from public websites' ]
      Encoding: 'UTF-8'
      TimeZone: 'UTC'
    )
  ]

################################################################################
# The version of this Phoenix which will be added as custom metadata to all
# imported items. Helps identify which Phoenixs are responsilble for what items.
- <PhoenixVersion> = '1.0.0'

################################################################################
# Custom processing settings

- <OCRProfileName>     = 'Default'
- <ImagingProfileName> = 'Default'
- <NuixTempDir>        = 'D:/temp/nuix'
- <PasswordFile>       = 'D:/Shares/Data/passwords.txt'

# Report on progress every 100 items
- <IngestProgressInterval> = 100

# Import processing settings that are used instead of a profile
- <ProcessingSettings> = (
    addBccToEmailDigests: false,
    addCommunicationDateToEmailDigests: false,
    analysisLanguage: 'en',
    calculateAuditedSize: true,
    calculateSSDeepFuzzyHash: false,
    carveFileSystemUnallocatedSpace: false,
    carveUnidentifiedData: false,
    carvingBlockSize: '',
    classifyImagesWithDeepLearning: false,
    createPrintedImage: false,
    createThumbnails: false,
    detectFaces: false,
    digests: [ 'MD5' ],
    enableCustomProcessing: [],
    enableExactQueries: false,
    exportMetadata: false,
    extractEndOfFileSlackSpace: false,
    extractFromSlackSpace: false,
    extractNamedEntities: false,
    extractNamedEntitiesFromProperties: false,
    extractNamedEntitiesFromText: false,
    extractNamedEntitiesFromTextStripped: false,
    extractShingles: false,
    hideEmbeddedImmaterialData: true,
    identifyPhysicalFiles: true,
    imagingProfileName: <ImagingProfileName>,
    maxDigestSize: 250000000,
    maxStoredBinarySize: 250000000,
    metadataExportProfileName: '',
    ocrProfileName: <OCRProfileName>,
    performOcr: true,
    populateGraphDatabase: false,
    processFamilyFields: false,
    processForensicImages: true,
    processLooseFileContents: true,
    processText: true,
    processTextSummaries: false,
    recoverDeletedFiles: true,
    reportProcessingStatus: 'physical_files',
    reuseEvidenceStores: true,
    skinToneAnalysis: false,
    smartProcessRegistry: false,
    stemming: false,
    stopWords: false,
    storeBinary: false,
    thumbnailSize: '',
    traversalScope: 'full_traversal',
    workerItemCallback: ''
  )

- <ParallelProcessingSettings> = (
    workerCount: 4
    workerMemory: 16384
    workerTemp: (PathCombine [<NuixTempDir> 'worker_temp'])
    embedBroker: true
    brokerMemory: 4096
  )

################################################################################
# Mime Type Settings - customise how different file types are processed
# This example defines three ways of processing text - skip, extract (process), or strip
# and then applies these defaults to a list of mime types

- <SkipText> = (
    processEmbedded: true
    processText: false
  )

- <ProcessText> = (
    processEmbedded: false
    processText: true
  )

- <StripText> = (
    processEmbedded: false
    textStrip: true
  )

- <MimeTypeSettings> = [
    ((mimeType: 'application/exe') + <SkipText>)
    ((mimeType: 'application/vnd.ms-draw') + <SkipText>)
    ((mimeType: 'application/vnd.ms-registry') + <StripText>)
    ((mimeType: 'application/x-plist') + <ProcessText>)
    ((mimeType: 'image/bmp') + <SkipText>)
    ((mimeType: 'image/gif') + <SkipText>)
    ((mimeType: 'image/jpeg') + <SkipText>)
    ((mimeType: 'image/png') + <ProcessText>)
    ((mimeType: 'image/tiff') + <ProcessText>)
    ((mimeType: 'image/x-pict') + <SkipText>)
    ((mimeType: 'image/x-portable-bitmap') + <ProcessText>)
    ((mimeType: 'text/csv') + <ProcessText>)
    ((mimeType: 'text/tab-separated-values') + <ProcessText>)
    ((mimeType: 'text/x-common-log') + <StripText>)
  ]

################################################################################

# Get the version for the Phoenix Nuix Connector, this is then applied as a custom
# metadata field to the imported items
- <PhoenixVersion> = (GetConnectorInformation | Filter (StringContains <>['Id'] 'Nuix'))[0]['Version']

- NuixOpenCase <CasePath>

- ForEach <Evidence> (
    NuixAddItem
      Custodian: <>['Custodian']
      Container: <>['Container']
      Paths: <>['Paths']
      Encoding: <>['Encoding']
      TimeZone: <>['TimeZone']
      ProcessingSettings: <ProcessingSettings>
      ParallelProcessingSettings: <ParallelProcessingSettings>
      MimeTypeSettings: <MimeTypeSettings>
      CustomMetadata: (PhoenixNuixConnectorVersion: <PhoenixVersion> PhoenixVersion: <PhoenixVersion>)
      ProgressInterval: <IngestProgressInterval>
      PasswordFile: <PasswordFile>
  )

################################################################################
```

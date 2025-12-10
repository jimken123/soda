---
title: Create Case, Ingest and Filter | Nuix Connector Examples
sidebar_label: Create Case, Ingest and Filter
---

# Create Case, Ingest and Filter

This example will:

1. Create a new case
2. Ingest a subset of the [EDRM Micro Dataset](https://edrm.net/resources/data-sets/edrm-micro-datasets/)
3. OCR PDFs and TIFFs that have no text
4. Run searches and tag responsive items
5. Exclude databases and containers
6. Create a new item set called `TaggedItems`

## Setup

[Instructions on how to install and setup Phoenix and the Nuix Connector.](nuix.md)

To download and setup the data for this example, use the SCL from
[this example](nuix-download-sample-data.md). Manual steps:

1. Download the [EDRM Micro Dataset](https://edrm.net/resources/data-sets/edrm-micro-datasets/)
   and extract to the `./data` directory.

## SCL

Download the SCL here: [nuix-create-ingest-filter.scl](pathname:///example-files/nuix/nuix-create-ingest-filter.scl)

To run:

```powershell
PS > ./Phoenix.exe run nuix-create-ingest-filter.scl
```

Details of the case and the evidence can be customised by updating the relevant
[variables](../../../sequence-configuration-language.md#variables) in the SCL.

`SearchAndTag` is an [array](../../../sequence-configuration-language.md#arrays)
of [entities](../../../entities.md). To add additional search terms,
just copy each line and replace the terms in the quotes.

```scl
################################################################################

- <CaseName>     = 'CASE001'
- <CasePath>     = './ingest-filter'
- <Investigator> = 'Antony'
- <Custodian>    = 'EDRM Micro'
- <Container>    = 'CASE01B00001'

- <Evidence> = [
    './data/EDRM specific data'
  ]

- <SearchAndTag> = [
    (Search: '*.jpg' Tag: 'image')
    (Search: '*.doc' Tag: 'document')
    (Search: 'red'   Tag: 'colour')
  ]

################################################################################

# Create a new case. It will remain open and will be automatically used by the other steps
- NuixCreateCase CaseName: <CaseName> CasePath: <CasePath> Investigator: <Investigator>

# Add evidence to case
- NuixAddItem Custodian: <Custodian> Paths: <Evidence> Container: <Container>

# OCR PDFs or TIFFs with no text
- NuixPerformOCR Search: 'mime-type:( application/pdf OR image/tiff ) AND NOT content:* AND NOT flag:encrypted'

# For each entity in the SearchAndTag list, run a search in Nuix and tag the results
- ForEach <SearchAndTag> (NuixSearchAndTag Search: <>['Search'] Tag: <>['Tag'])

# Exclude database files and containers
- NuixSearchAndExclude
    Search: 'kind:database OR (kind:container AND NOT flag:encrypted)'
    ExclusionReason: 'irrelevant'

# Create an item set from the ingested items
- NuixAddToItemSet ItemSetName: 'TaggedItems' SearchTerm: 'tag:*'

################################################################################
```

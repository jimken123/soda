---
title: Create Case, Ingest, Filter and Export | Nuix Connector Examples
sidebar_label: Create Case, Ingest, Filter and Export
---

# Create Case, Ingest, Filter and Export

This example will:

1. Create a new case
2. Add the [EDRM Micro Dataset](https://edrm.net/resources/data-sets/edrm-micro-datasets/)
   to the case
3. Run searches and exclude responsive items
4. Run searches and tag responsive items
5. Create an item set of the items that were not excluded
6. OCR this item set
7. Create a production set
8. Export a concordance load file with native and text
9. If any items are tagged as `Encrypted` in step 4, export these items
   as a separate concordance file, for external processing.
10. Create two reports
    - Summary of the items ingested
    - Summary of irregular items

## Setup

[Instructions on how to install and setup Phoenix and the Nuix Connector.](nuix.md)

To download and setup the data for this example, use the SCL from
[this example](nuix-download-sample-data.md). Manual steps:

1. Download the [EDRM Micro Dataset](https://edrm.net/resources/data-sets/edrm-micro-datasets/)
   and extract to the `./data` directory.
2. To test encrypted file export, a PDF is available
   [here](https://gitlab.com/Phoenix/connectors/nuix/-/blob/main/Nuix.Tests/AllData/encrypted.pdf).
   Once downloaded, place it into `./data/EDRM specific data`

## SCL

Download the SCL here: [nuix-create-ingest-export.scl](pathname:///example-files/nuix/nuix-create-ingest-export.scl)

To run:

```powershell
PS > ./Phoenix.exe run nuix-create-ingest-export.scl
```

Details of the case and the evidence can be customised by updating the relevant
[entity](../../../entities.md) properties. `Evidence`, `SearchAndExclude`
and `SearchAndTag` are [arrays](../../../sequence-configuration-language.md#arrays),
so more evidence and/or searches can be added by adding additional entities to
these arrays.

```scl
################################################################################

- <CaseDetails> = (
    'CaseName'          : 'CASE01'
    'InvestigatorName'  : 'Antony'
    'CaseDescription'   : 'Ingestion and filtration example'
    'ProductionSetName' : 'IngestAndFilter'
    'ProcessingPath'    : './create-export'
  )

################################################################################

- <Evidence> = [
    (
      Custodian: 'EDRM Micro'
      Container: 'CASE01B00001'
      Paths: [
        './data/Data from public websites'
        './data/EDRM specific data'
      ]
    )
  ]

################################################################################

- <SearchAndExclude> = [
    (Reason: 'Inline'     Search: 'has-exclusion:0 AND flag:inline')
    (Reason: 'Irrelevant' Search: 'has-exclusion:0 AND ( kind:database OR (kind:container AND NOT flag:encrypted) OR kind:system )')
  ]

- <SearchAndTag> = [
    (Tag: 'ToOCR'     Search: 'mime-type:( application/pdf OR image/tiff ) AND NOT content:* AND NOT flag:encrypted')
    (Tag: 'Encrypted' Search: 'flag:encrypted')
  ]

################################################################################
# Advanced customisation below here

- <ProcessingPath> = PathCombine [<CaseDetails>['ProcessingPath']]
- <CasePath>       = PathCombine [<ProcessingPath>, 'case']
- <ExportPath>     = PathCombine [<ProcessingPath>, 'export']
- <EncryptedPath>  = PathCombine [<ProcessingPath>, 'encrypted']
- <ReportsFolder>  = PathCombine [<ProcessingPath>, 'reports']
- <ReportPath>     = PathCombine [<ReportsFolder>, $"{<CaseDetails>['CaseName']}-{<CaseDetails>['ProductionSetName']}-IngestReport.txt"]
- <IrregularPath>  = PathCombine [<ReportsFolder>, $"{<CaseDetails>['CaseName']}-{<CaseDetails>['ProductionSetName']}-IrregularItems.txt"]

################################################################################
# Phoenix starts here

# Remove & recreate the processing directory
- If (DoesDirectoryExist <ProcessingPath>) (DeleteItem <ProcessingPath>)
- CreateDirectory <ProcessingPath>
- CreateDirectory <ReportsFolder>

# If exists, open existing, or create and open a new case
# This will keep the connection open for the rest of the Phoenix
- If (NuixDoesCaseExist <CasePath>)
    Then: (NuixOpenCase <CasePath>)
    Else: (
      NuixCreateCase
        CaseName: <CaseDetails>['CaseName']
        CasePath: <CasePath>
        Investigator: <CaseDetails>['InvestigatorName']
        Description: <CaseDetails>['CaseDescription']
    )

- <Version> = (GetConnectorInformation | Filter (StringContains <>['Id'] 'Nuix'))[0]['Version']

# Add evidence to the case
- ForEach <Evidence> (
    NuixAddItem
      Custodian: <>['Custodian']
      Paths: <>['Paths']
      Container: <>['Container']
      CustomMetadata: (PhoenixVersion: <Version>)
  )

# Run exclusion searches and tag items
- ForEach <SearchAndExclude> (
    NuixSearchAndExclude SearchTerm: <>['Search'] ExclusionReason: <>['Reason']
  )

# Exclude any encrypted items that have been decrypted
- NuixExcludeDecryptedItems

# Ru searches and tag items
- ForEach <SearchAndTag> (
    NuixSearchAndTag SearchTerm: <>['Search'] Tag: <>['Tag']
  )

# Create an item set for export
- NuixAddToItemSet
    ItemSetName: <CaseDetails>['ProductionSetName']
    ItemSetDescription: $"{<CaseDetails>['ProductionSetName']} item set"
    SearchTerm: '* AND NOT exclusion:*'
    ItemSetDeduplication: 'MD5'
    DeduplicateBy: 'Family'

# Perform OCR on the
- NuixPerformOCR OCRProfileName: 'Default' Search: 'tag:ToOCR'

# Create a production set for export
- NuixAddToProductionSet
    ProductionSet: <CaseDetails>['ProductionSetName']
    Description: $"{<CaseDetails>['ProductionSetName']} export set"
    Search: $"item-set:{<CaseDetails>['ProductionSetName']}"
    SearchType: SearchType.ItemsAndDescendants

# Export the production set as a concordance load file
- NuixExportConcordance
    ExportPath: <ExportPath>
    ProductionSet: <CaseDetails>['ProductionSetName']
    TraversalStrategy: ExportTraversalStrategy.Items
    ExportOptions: (
      native: (path: 'NATIVE' naming: 'document_id')
      text: (path: 'TEXT' naming: 'document_id')
    )

# Export encrypted items if there are any
- If ((NuixCountItems Search: 'tag:Encrypted') > 0) (
    - NuixAddToProductionSet ProductionSet: 'EncryptedItems' Search: 'tag:Encrypted'
    - NuixExportConcordance
        ExportPath: <EncryptedPath>
        ProductionSet: 'EncryptedItems'
        ExportOptions: (native: (naming: 'guid'))
  ) (Log 'No encrypted items found to export')

# Create an ingestion summary and an irregular items report
- NuixCreateReport | FileWrite <ReportPath>
- NuixCreateIrregularItemsReport | FileWrite <IrregularPath>
```

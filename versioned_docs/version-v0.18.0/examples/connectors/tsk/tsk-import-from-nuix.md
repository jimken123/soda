---
title: Import From Nuix into Autopsy | The Sleuth Kit Connector Examples
sidebar_label: Import From Nuix into Autopsy
---

# Import From Nuix into Autopsy

This example will

- Create a new Nuix case
- Import the data into that case
- Place data into a production set
- Export that production set
- Create a new Autopsy case
- Import the exported data into the Autopsy case

## Setup

[Instructions on how to install and setup Phoenix and the TSK Connector.](tsk.md)

[How to set up the Nuix Connector](../nuix/nuix.md)

[You also need to download the test data](../nuix/nuix-download-sample-data.md)

You also need to create a report profile to use.

- Open the Autopsy application
- Click `Tools` and then `Options`
- Choose the `Command Line Ingest` tab on the options dialog
- Choose `Make new Profile../...` in the the `Report Profile` dropdown
- Press `Configure` and follow the instructions

To run:

```powershell
PS > ./Phoenix.exe run tsk-import-from-nuix.scl
```

## SCL

Download the SCL here: [tsk-import-from-nuix.scl](pathname:///example-files/tsk/tsk-import-from-nuix.scl)

```scl
################################################################################
- <CaseName>      = 'CASE001'
- <CasePath>      = './ingest-filter'
- <Investigator>  = 'Antony'
- <Custodian>     = 'EDRM Micro'
- <Container>     = 'CASE01B00001'
- <ProductionSet> = 'TaggedItemsProduction'

- <Evidence> = [
    './data/EDRM specific data'
  ]

- <ExportPath> = PathCombine ['ConcordanceExport'] # Create absolute path

- <AutopsyCaseDirectory> = PathCombine ['AutopsyCases']

################################################################################

# Create a new case. It will remain open and will be automatically used by the other steps
- NuixCreateCase CaseName: <CaseName> CasePath: <CasePath> Investigator: <Investigator>

# Add evidence to the case
- NuixAddItem Custodian: <Custodian> Paths: <Evidence> Container: <Container>

# Create an item set for export
- NuixAddToItemSet ItemSetName: 'TaggedItems' SearchTerm: 'tag:*'

# Create a production set for export
- NuixAddToProductionSet
    ProductionSet: <ProductionSet>
    Search: $"item-set:TaggedItems"
    SearchType: SearchType.ItemsAndDescendants

# Export the production set as a concordance load file
- NuixExportConcordance
    ExportPath: <ExportPath>
    ProductionSet: <ProductionSet>
    TraversalStrategy: ExportTraversalStrategy.Items
    ExportOptions: (
      native: (path: 'NATIVE' naming: 'document_id')
      text: (path: 'TEXT' naming: 'document_id')
    )

- AutopsyCreateNewCase
    CaseName: <CaseName>
    CaseBaseDirectory: <AutopsyCaseDirectory>
    DataSourcePath: <ExportPath>
    IngestProfileName: ""
```

---
title: Import Entities from Nuix | Phoenix Connector for Relativity Examples
sidebar_label: Import Entities from Nuix
---

# Import Entities from Nuix

This example will export entities from a Nuix Case and import them into a Relativity Workspace.

## Setup

- [Instructions on how to install and setup Phoenix and the Phoenix Connector for Relativity®.](relativity.md)
- [Instructions on how to install and setup Phoenix and the Nuix Connector.](../nuix/nuix.md)

You will also need to create a .kwe file to map the properties.
To find out how to do this look at [Relativity Import Concordance.](relativity-import-concordance.md)

## SCL

Download the SCL here: [relativity-import-from-nuix.scl](pathname:///example-files/relativity/relativity-import-from-nuix.scl)

To run:

```powershell
PS > ./Phoenix.exe run relativity-import-from-nuix.scl
```

```scl
- <NuixCasePath>        = 'c:/MyCase'
- <ProductionSet>       = 'MyProductionSet'
- <ExportPath>          = 'c:/MyCaseExport'
- <RelativityWorkspace> = 'My Workspace'
- <SettingsFilePath>    = 'c:/settingsFile.kwe'

- NuixExportConcordance
    CasePath: <NuixCasePath>
    ExportPath: <ExportPath>
    ProductionSet: <ProductionSet>
    TraversalStrategy: ExportTraversalStrategy.Items
    ExportOptions: (
      native: (path: 'NATIVE' naming: 'document_id')
      text: (path: 'TEXT' naming: 'document_id')
    )

- RelativityImport
    FilePath: (PathCombine [<ExportPath>, 'loadfile.dat'])
    SettingsFilePath: <SettingsFilePath>
    FileImportType: FileImportType.Object
    Workspace: <RelativityWorkspace>
```

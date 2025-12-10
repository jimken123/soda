---
title: Import Concordance | Phoenix Connector for Relativity Examples
sidebar_label: Import Concordance
---

# Import Concordance

This example will import documents from a concordance or CSV file into a Relativity Workspace

## Setup

[Instructions on how to install and setup Phoenix and the Phoenix Connector for Relativity®.](relativity.md)

[Instructions on how to install the Relativity® Desktop Client.](https://help.relativity.com/RelativityOne/Content/Relativity/Relativity_Desktop_Client/Using_the_RDC_installer.htm)

Make sure you have set the `Phoenix.Connectors.Relativity.settings.DesktopClientPath` value in your settings file.
You may also need to run the Desktop Client at least once to set up your settings

## Creating a .kwe file

To import using this method, you need to create a .kwe file for your data. This file contains information
about field mappings etc. for the import. If you have multiple concordance files with the exact same format
you can reuse this file.

- Run the Relativity.Desktop.Client executable

- Login with your Relativity Username and Password

![Logging in to the Desktop Client](/img/relativity/desktop_client_login.jpg)

- Choose your Workspace on the dialog that pops up

- Click `Tools/Import/Document` Load File

![Navigating the menu](/img/relativity/import_document_load_file.jpg)

- Choose the file to load and select the correct encoding. You should see all of the File Column Headers listed

![Choose Encoding](/img/relativity/choose_encoding.jpg)

- Go to the Field Map tab

- Use the control to map Workspace Fields to Load File Fields

![Field Mapping](/img/relativity/field_mapping.jpg)

- Set the other fields, particularly those involving Native Files

![Other Fields](/img/relativity/other_fields.jpg)

- Use `Import/Preview Errors` to check that everything is okay

![No Errors](/img/relativity/no_errors.jpg)

- Click `File/Save Import Settings (kwe)` to save your file

## SCL

Download the SCL here: [relativity-import-concordance.scl](pathname:///example-files/relativity/relativity-import-concordance.scl)

To run:

```powershell
PS > ./Phoenix.exe run relativity-import-concordance.scl
```

```scl
# Set the name of your workspace. You could also use Workspace Artifact Id
- <Workspace>        = 'Test Workspace'
- <FilePath>         = 'C:\repos\Examples\Concordance\Data\loadfile.dat'
- <SettingsFilePath> = 'C:\repos\Examples\Concordance\LoadFileSettings.kwe'

- RelativityImport
    FilePath: <FilePath>
    SettingsFilePath: <SettingsFilePath>
    FileImportType: FileImportType.Object
    Workspace: <Workspace>
```

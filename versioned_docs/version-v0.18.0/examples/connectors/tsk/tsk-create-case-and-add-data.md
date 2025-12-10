---
title: Create an Autopsy Case and Add Data | The Sleuth Kit Connector Examples
sidebar_label: Create an Autopsy Case and Add Data
---

# Create an Autopsy Case and Add Data

This example will

- Create a new Autopsy Case
- Add a data source to that case
- Ingest the data

## Setup

[Instructions on how to install and setup Sequence and the TSK Connector.](tsk.md)

To run:

```powershell
PS > ./sequence.exe run tsk-create-case-and-add-data.scl
```

## SCL

Download the SCL here: [tsk-create-case-and-add-data.scl](pathname:///example-files/tsk/tsk-create-case-and-add-data.scl)

```scl
- AutopsyCreateNewCase
    CaseName: 'MyNewCase'
    CaseBaseDirectory: (PathCombine ['CaseDirectory'] )
    DataSourcePath: (PathCombine ['dataExamples', 'loadfile_0001-10001.dat'])
    IngestProfileName: '' #Use Default Profile
```

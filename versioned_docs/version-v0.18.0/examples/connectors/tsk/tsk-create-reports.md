---
title: Generate Reports for Autopsy Case | The Sleuth Kit Connector Examples
sidebar_label: Generate Reports for Autopsy Case
---

# Generate Reports for Autopsy Case

This example will

- Create a report for an existing case
- The report will be placed in the `Reports` folder in the case directory

## Setup

[Instructions on how to install and setup Phoenix and the TSK Connector.](tsk.md)

You also need to create a report profile to use.

- Open the Autopsy application
- Click `Tools` and then `Options`
- Choose the `Command Line Ingest` tab on the options dialog
- Choose `Make new Profile../...` in the the `Report Profile` dropdown
- Press `Configure` and follow the instructions

To run:

```powershell
PS > ./Phoenix.exe run tsk-create-case-and-add-data.scl
```

## SCL

Download the SCL here: [tsk-create-reports.scl](pathname:///example-files/tsk/tsk-create-reports.scl)

```scl
- AutopsyGenerateReports
    CaseDirectory: (PathCombine ['CaseDirectory', 'MyNewCase_2021_09_22_15_43_42'])
    ProfileName: 'html'
```

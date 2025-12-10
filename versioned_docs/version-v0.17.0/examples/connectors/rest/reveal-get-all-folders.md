---
title: Get All Reveal Folders | REST Connector Examples
sidebar_label: Get All Reveal Folders
---

# Get All Reveal Folders

This example will

- Login to Reveal
- Get the root folder
- Get all subfolders

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Rest.](rest.md)

## SCL

Download the SCL here: [reveal-get-all-folders.scl](pathname:///example-files/rest/reveal-get-all-folders.scl)

To run:

```powershell
PS > ./sequence.exe run reveal-get-all-folders.scl
```

```scl #ignore
- <username> = 'username'
- <password> = 'password'

- <caseId> = '159'

- <session> = Reveal_Login_Get username: <username> password: <password>
- <userId> = <session>["UserId"]
- log $"UserId: {<userId>}"
- <LoginSessionId> = <session>["LoginSessionId"]

- <rootFolder> = Reveal_WorkFolder_GetRootFolder caseId: <caseId> InControlAuthToken: <LoginSessionId> userId: <userId>
- <subFolders> = Reveal_WorkFolder_GetSubFolders caseId: <caseId> InControlAuthToken: <LoginSessionId>
- log <subFolders>
```

---
title: Create Reveal Folder | REST Connector Examples
sidebar_label: Create Reveal Folder
---

# Create Reveal Folder

This example will

- Login to Reveal
- Create a new folder

## Setup

[Instructions on how to install and setup Phoenix and the Phoenix Connector for Rest.](rest.md)

## SCL

Download the SCL here: [reveal-create-folder.scl](pathname:///example-files/rest/reveal-create-folder.scl)

To run:

```powershell
PS > ./Phoenix.exe run reveal-create-folder.scl
```

```scl #ignore
- <username> = 'username'
- <password> = 'password'

- <caseId> = '159'
- <folderBody> = ("Name": "MyTestFolder" )

- <session> = Reveal_Login_Get username: <username> password: <password>
- <userId> = <session>["UserId"]
- <LoginSessionId> = <session>["LoginSessionId"]

- <folderCreateResult> = (Reveal_WorkFolder_Create Body: <folderBody> caseId: <caseId> InControlAuthToken: <LoginSessionId> userId: <userId>)
```

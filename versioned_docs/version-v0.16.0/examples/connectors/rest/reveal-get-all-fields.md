---
title: Get All Reveal Fields | REST Connector Examples
sidebar_label: Get All Reveal Fields
---

# Get All Reveal Fields

This example will

- Login to Reveal
- Log all fields profiles
- Log all fields

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Rest.](rest.md)

## SCL

Download the SCL here: [reveal-get-all-fields.scl](pathname:///example-files/rest/reveal-get-all-fields.scl)

To run:

```powershell
PS > ./sequence.exe run reveal-get-all-fields.scl
```

```scl #ignore
- <username> = 'username'
- <password> = 'password'

- <caseId> = '159'

- <session> = Reveal_Login_Get username: <username> password: <password>
- <userId> = <session>["UserId"]
- log $"UserId: {<userId>}"
- <LoginSessionId> = <session>["LoginSessionId"]

- log (Reveal_FieldProfile_Get caseId: <caseID>  InControlAuthToken:  <LoginSessionId>)
- log EntityFormat (Reveal_Field_GetAllFields caseId: <caseID>  InControlAuthToken:  <LoginSessionId>)
```

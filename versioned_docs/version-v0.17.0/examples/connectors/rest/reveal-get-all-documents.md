---
title: Get Document Metadata from Reveal | REST Connector Examples
sidebar_label: Get Document Metadata from Reveal
---

# Get Document Metadata from Reveal

This example will

- Login to Reveal
- Get the first 10 document ids
- Output all of those documents

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Rest.](rest.md)

## SCL

Download the SCL here: [reveal-get-all-documents.scl](pathname:///example-files/rest/reveal-get-all-documents.scl)

To run:

```powershell
PS > ./sequence.exe run reveal-get-all-documents.scl
```

```scl #ignore
- <username> = 'username'
- <password> = 'password'

- <caseId> = '159'

- <session> = Reveal_Login_Get username: <username> password: <password>
- <userId> = <session>["UserId"]
- log $"UserId: {<userId>}"
- <LoginSessionId> = <session>["LoginSessionId"]

- <documentIds> = (Reveal_Field_GetDocumentIds caseId: <caseId> InControlAuthToken: <LoginSessionId> startRow: "0" keyField: "ITEMID"  batchSize: "100" userId: <userId>)

- Reveal_Document_Post  caseId: <caseId> userId: <userId> InControlAuthToken: <LoginSessionId> Body: (
  keyField: "ITEMID"
  combinedDateTimeFields: true
  useFieldNames: true
  fieldProfileName: "Default"
  "documentIds": (<documentIds>)['value']
  "documentFields": ["Begin Number", "ITEMID"])
```

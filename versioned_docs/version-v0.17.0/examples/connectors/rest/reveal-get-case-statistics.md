---
title: Get Reveal Case Statistics | REST Connector Examples
sidebar_label: Get Reveal Case Statistics
---

# Get Reveal Case Statistics

This example will

- Login to Reveal
- Get statistics for a particular case

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Rest.](rest.md)

## SCL

Download the SCL here: [reveal-get-case-statistics.scl](pathname:///example-files/rest/reveal-get-case-statistics.scl)

To run:

```powershell
PS > ./sequence.exe run reveal-get-case-statistics.scl
```

```scl #ignore
- <username> = 'username'
- <password> = 'password'

- <session> = Reveal_Login_Get username: <username> password: <password>
- <userId> = <session>["UserId"]
- <LoginSessionId> = <session>["LoginSessionId"]
- <caseId> = 159
- <requestBody> = (  "CaseId": <caseId>,  "LatestOnly": true)
- Reveal_Cases_GetCaseStatistics InControlAuthToken: <LoginSessionId> Body: <requestBody>
```

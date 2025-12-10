---
title: Get Reveal Cases | REST Connector Examples
sidebar_label: Get Reveal Cases
---

# Get Reveal Cases

This example will

- Login to Reveal
- Get a list of Reveal cases

## Setup

[Instructions on how to install and setup Phoenix and the Phoenix Connector for Rest.](rest.md)

## SCL

Download the SCL here: [reveal-get-cases.scl](pathname:///example-files/rest/reveal-get-cases.scl)

To run:

```powershell
PS > ./Phoenix.exe run reveal-get-cases.scl
```

```scl #ignore
- <username> = 'username'
- <password> = 'password'

- <session> = Reveal_Login_Get username: <username> password: <password>
- <userId> = <session>["UserId"]
- <LoginSessionId> = <session>["LoginSessionId"]
- Reveal_Cases_Get InControlAuthToken: <LoginSessionId>
```

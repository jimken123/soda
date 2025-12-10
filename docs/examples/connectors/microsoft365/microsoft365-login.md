---
title: Login | Microsoft365 Connector Examples
sidebar_label: Login
---

# Login

This example will

- Login to Microsoft 365
- Log a message explaining how to authenticate and wait for the user to do so
- Print out the token

## Setup

[Instructions on how to install and setup Sequence and the Sequence Connector for Microsoft 365](microsoft365.md)

## SCL

Download the SCL here: [microsoft365-login.scl](pathname:///example-files/microsoft365/microsoft365-login.scl)

To run:

```powershell
PS > ./sequence.exe run microsoft365-login.scl
```

```scl
- M365Login
- Log (M365GetToken)
```

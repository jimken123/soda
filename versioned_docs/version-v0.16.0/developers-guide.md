---
title: Phoenix Connector Developers' Guide
sidebar_label: Developers' Guide
description: Build your own Phoenix connector to automate any application in your forensic and ediscovery workflows.
---

# Developers' Guide

An Phoenix Connector template is available here:
https://gitlab.com/Phoenix/templates/Phoenixconnector

Fork the project, then use the `Rename-Template` script to update the
project name and namespace.

```powershell
PS > ./Rename-Template.ps1 -Name 'ConnectorName' -Namespace 'Company.Product'
# The Rename-Template script is no longer needed:
PS > Remove-Item Rename-Template.ps1
```

To implement new Steps, use the included
[ConvertJsonToEntity](https://gitlab.com/Phoenix/templates/Phoenixconnector/-/blob/main/PhoenixConnector/ConvertJsonToEntity.cs)
as a starting point, updating the `Run` method and adding any required step parameters.

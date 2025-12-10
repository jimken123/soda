---
title: NuixGetLicenseDetails Step | Nuix Connector Documentation
sidebar_label: NuixGetLicenseDetails
description: Returns an Entity with information about the Nuix license currently in use. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixGetLicenseDetails
_Alias_:`NuixGetLicenseDetails`

_Output_:`Entity`

*Requires Nuix.Version 8.0*

Returns an Entity with information about the Nuix license currently in use. Includes license type, description, exprity, number of available workers, and the available features. The features list can be used when configuring the Nuix Connector.


|Parameter               |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:-----------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CasePath<br/>_Directory_|`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
---
title: NuixGetAuditedSize Step | Nuix Connector Documentation
sidebar_label: NuixGetAuditedSize
description: Calculate the total audited size for a case. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixGetAuditedSize
_Alias_:`NuixGetAuditedSize`, `NuixCalculateAuditedSize`

_Output_:`SCLDouble`

*Requires Nuix.Version 5.0*

*Requires Nuix.Features: ANALYSIS*

Calculate the total audited size for a case. For this to work, the case material needs to have been ingested with the calculateAuditedSize=true processing setting. Nuix uses 1000 base for kb/mb/gb, not 1024.


|Parameter               |Type    |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:-----------------------|:------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SearchTerm<br/>_Search_ |`string`|        |1       |flag:audited             |               |The search term to use for calculating audited size. This should be left as the default.                                                                                                     |
|CasePath<br/>_Directory_|`string`|        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
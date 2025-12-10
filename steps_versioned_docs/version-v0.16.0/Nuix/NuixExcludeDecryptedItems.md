---
title: NuixExcludeDecryptedItems Step | Nuix Connector Documentation
sidebar_label: NuixExcludeDecryptedItems
description: Excludes password protected items once they have been decrypted. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixExcludeDecryptedItems
_Alias_:`NuixExcludeDecryptedItems`

_Output_:`Unit`

*Requires Nuix.Version 5.0*

*Requires Nuix.Features: ANALYSIS*

Excludes password protected items once they have been decrypted. This only excludes encrypted original items that have a decrypted child with the same name.


|Parameter                      |Type    |Required|Position|Default Value                     |Example        |Summary                                                                                                                                                                                      |
|:------------------------------|:------:|:------:|:------:|:--------------------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SearchTerm<br/>_Search_        |`string`|        |1       |has-exclusion:0 AND flag:encrypted|               |The search term used to find decrypted items.                                                                                                                                                |
|ExclusionReason<br/>_Exclusion_|`string`|        |2       |DecryptedItem                     |               |The exclusion reason.                                                                                                                                                                        |
|CasePath<br/>_Directory_       |`string`|        |        |Use the current open case         |C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
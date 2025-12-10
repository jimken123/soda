---
title: M365MailRead Step | Microsoft 365 Connector Documentation
sidebar_label: M365MailRead
description: Read User mail from Microsoft 365. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Microsoft365]
hide_title: true
hide_table_of_contents: true
---

# M365MailRead
_Alias_:`M365MailRead`

_Output_:`Array<T>`

Read User mail from Microsoft 365. Uses /me/mailFolders('{Folder}')/messages endpoint


|Parameter|Type    |Required|Position|Default Value|Summary                                           |
|:--------|:------:|:------:|:------:|:-----------:|:-------------------------------------------------|
|Take     |`int`   |        |1       |25           |The number of results to take at once. At most 50.|
|Folder   |`string`|        |2       |Inbox        |The name of the Mail Folder                       |
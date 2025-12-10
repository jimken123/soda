---
title: HttpRequest Step | Core SDK Documentation
sidebar_label: HttpRequest
description: Makes a Http Request to download data from the web. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# HttpRequest
_Alias_:`HttpRequest`, `Download`, `GetWebStream`

_Output_:`StringStream`

Makes a Http Request to download data from the web. Returns a StringStream containing binary encoded data.


|Parameter                |Type    |Required|Position|Default Value        |Summary                   |
|:------------------------|:------:|:------:|:------:|:-------------------:|:-------------------------|
|Uri<br/>_From_<br/>_File_|`string`|✔       |1       |                     |The base url              |
|Headers                  |`entity`|        |        |No Additional Headers|Additional headers to send|
---
title: M365Login Step | Microsoft 365 Connector Documentation
sidebar_label: M365Login
description: Login to M365. You do not need to do this.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Microsoft365]
hide_title: true
hide_table_of_contents: true
---

# M365Login
_Alias_:`M365Login`

_Output_:`Unit`

Login to M365. You do not need to do this.


|Parameter  |Type    |Required|Position|Default Value|Summary                                                                                                                                                                                                                        |
|:----------|:------:|:------:|:------:|:-----------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HandleLogin|`entity`|        |        |Not set      |How to handle the login url and code. The function takes an entity with the all the relevant properties, particularly 'VerificationUri' and 'UserCode' If neither this nor the Token is set, the token and code will be logged.|
|Token      |`string`|        |        |Not set      |The access token. If this is not set, the user must authenticate the login by going to https://login.microsoftonline.com/common/oauth2/deviceauth and entering the code which is logged.                                       |
---
title: M365Login Step | Microsoft365 Connector Documentation
sidebar_label: M365Login
description: Step to explicitly log into M365. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Microsoft365]
hide_title: true
hide_table_of_contents: true
---

# M365Login

_Alias_:`M365Login`

_Output_:`Unit`

Login to M365.

| Parameter |   Type   | Required | Position |           Default Value           | Summary                                                                                                                                                                                  |
| :-------- | :------: | :------: | :------: | :-------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Token     | `string` |          |    1     | User must authenticate the login. | The access token. If this is not set, the user must authenticate the login by going to https://login.microsoftonline.com/common/oauth2/deviceauth and entering the code which is logged. |

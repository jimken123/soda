---
title: M365UsersRead Step | Microsoft365 Connector Documentation
sidebar_label: M365UsersRead
description: Read a list of users from Microsoft 365. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Microsoft365]
hide_title: true
hide_table_of_contents: true
---

# M365UsersRead

_Alias_:`M365UsersRead`

_Output_:`Array<T>`

Read a list of users from Microsoft 365. Uses `/users` endpoint.

| Parameter | Type  | Required | Position | Default Value | Summary                                            |
| :-------- | :---: | :------: | :------: | :-----------: | :------------------------------------------------- |
| Take      | `int` |          |    1     |      25       | The number of results to take at once. At most 50. |

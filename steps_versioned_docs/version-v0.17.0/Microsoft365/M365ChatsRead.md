---
title: M365ChatsRead Step | Microsoft365 Connector Documentation
sidebar_label: M365ChatsRead
description: Read User mail from Microsoft 365. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Microsoft365]
hide_title: true
hide_table_of_contents: true
---

# M365ChatsRead

_Alias_:`M365ChatsRead`

_Output_:`Array<T>`

Read User mail from Microsoft 365. Uses `/Chats` endpoint.

| Parameter | Type  | Required | Position | Default Value | Summary                                            |
| :-------- | :---: | :------: | :------: | :-----------: | :------------------------------------------------- |
| Take      | `int` |          |    1     |      25       | The number of results to take at once. At most 50. |

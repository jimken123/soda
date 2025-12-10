---
title: M365ChannelMessagesRead Step | Microsoft 365 Connector Documentation
sidebar_label: M365ChannelMessagesRead
description: Reads M365 Channels. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Microsoft365]
hide_title: true
hide_table_of_contents: true
---

# M365ChannelMessagesRead
_Alias_:`M365ChannelMessagesRead`

_Output_:`Array<T>`

Reads M365 Channels Uses /teams/{teamId}/channels/{channelId}/messages endpoint


|Parameter  |Type    |Required|Position|Default Value           |Summary                                                                        |
|:----------|:------:|:------:|:------:|:----------------------:|:------------------------------------------------------------------------------|
|ChannelId  |`string`|        |        |ChannelName must be set.|The Id of the Channel. Either this or ChannelName must be set.                 |
|ChannelName|`string`|        |        |ChannelId must be set.  |The Name of the Channel. Either this or ChannelId must be set.                 |
|TeamId     |`string`|        |        |TeamName must be set.   |The Id of the Team the channel belongs to. Either this or TeamName must be set.|
|TeamName   |`string`|        |        |TeamId must be set.     |The Name of the Team the channel belongs to. Either this or TeamId must be set.|
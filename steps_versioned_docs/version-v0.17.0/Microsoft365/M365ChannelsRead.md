---
title: M365ChannelsRead Step | Microsoft365 Connector Documentation
sidebar_label: M365ChannelsRead
description: Reads M365 Channels. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Microsoft365]
hide_title: true
hide_table_of_contents: true
---

# M365ChannelsRead

_Alias_:`M365ChannelsRead`

_Output_:`Array<T>`

Reads M365 Channels. Uses `/teams/{teamId}/allChannels` endpoint.

| Parameter |   Type   | Required | Position |     Default Value     | Summary                                                                         |
| :-------- | :------: | :------: | :------: | :-------------------: | :------------------------------------------------------------------------------ |
| TeamId    | `string` |          |          | TeamName must be set. | The Id of the Team to get the Channels of. Either this or TeamName must be set. |
| TeamName  | `string` |          |          |  TeamId must be set.  | The Name of the Team to get the Channels of. Either this or TeamId must be set. |

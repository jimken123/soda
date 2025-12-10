---
description: Phoenix connector for the Microsoft Graph API. Easily automate forensic and ediscovery workflows that interact with Microsoft365 applications.
---

# Microsoft365 Connector

The Phoenix Connector for Microsoft 365 allows users to automate ediscovery
and forensic workflows that use [Microsoft Graph](https://docs.microsoft.com/en-us/graph/).

This connector has [Steps](https://Phoenix.sh/steps/Microsoft365) to:

- Read Email
- Read Chats
- List Users
- List Teams
- List Channels of a Team
- Read messages in a channel

[Phoenix Connector for Microsoft365 examples available here](../examples/connectors/microsoft365/microsoft365.md).

Source code available on [GitLab](https://gitlab.com/Phoenix/connectors/microsoft365).

## Microsoft365 Connector Settings

This connector requires additional configuration which can be
provided using the `settings` key in `connectors.json`.

## Authentication

Using this connector requires authenticating with Microsoft 365.  
There are two ways to do this:

- Use steps as normal. The first time you use a step which requires authentication,
  a message will be logged containing a url and a code. Follow the url,
  enter the code and login to authenticate.
- Create a token by logging in previously and supply this token as a parameter to `M365Login`

### Supported Settings

| Name            | Required |    Type    | Description                                                     |
| :-------------- | :------: | :--------: | :-------------------------------------------------------------- |
| TenantId        |    ✔     |  `string`  | Directory Id of the application                                 |
| ClientId        |    ✔     |  `string`  | Application Id                                                  |
| GraphUserScopes |    ✔     | `string[]` | Permission scopes to use. Each step has its own required scopes |

If you do not have the Tenant and Client Ids you may have to create an application,
follow this instructions [on this page](https://docs.microsoft.com/en-us/graph/tutorials/dotnet?tabs=aad&tutorial-step=1)

### Example Settings

```json
"Phoenix.Connectors.Microsoft365": {
  "id": "Phoenix.Connectors.Microsoft365",
  "enable": true,
  "version": "0.17.0",
  "settings": {
    "TenantId": "abc123",
    "ClientId": "def456",
    "GraphUserScopes": [
      "Mail.Read",
      "User.ReadBasic.All",
      "Team.ReadBasic.All",
      "Chat.Read",
      "Channel.ReadBasic.All",
      "ChannelMessage.Read.All"
    ]
  }
}
```

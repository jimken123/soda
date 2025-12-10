---
title: Import Data from Slack | Singer Connector Examples
sidebar_label: Import Data from Slack
---

# Import Data from Slack

[Instructions on how to install and setup Phoenix and the Singer Connector.](singer.md)

How to set up the Slack Tap

- [https://github.com/singer-io/getting-started](Install Singer)
- [https://www.singer.io/tap/slack/](Install the Slack Tap)

- Create a Slack bot in the Slack API
- Use the following manifest

```yaml
_metadata:
  major_version: 1
  minor_version: 1
display_information:
  name: Singer
features:
  bot_user:
    display_name: Singer
    always_online: false
oauth_config:
  scopes:
    bot:
      - channels:history
      - channels:join
      - channels:read
      - files:read
      - groups:read
      - links:read
      - reactions:read
      - remote_files:read
      - remote_files:write
      - team:read
      - usergroups:read
      - users.profile:read
      - users:read
      - users:read.email
settings:
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false
```

- Get the `Bot User OAuth Token` from the `OAuth & Permissions` tab in the Slack API

- Create a `slack.config` file with the following contents (replacing the token and start date)

```json
{
  "token": "xxxx",
  "start_date": "2021-11-02T00:00:00",
  "join_public_channels": "true"
}
```

- Create a `catalog.json` file

```powershell
tap-slack --config C:\Singer\slack.config --discover > catalog.json
```

- Edit the `catalog.json` file. You need to add `"selected": true` to the metadata section of all the stream you wish to read.

```json
{
  "breadcrumb": [],
  "metadata": {
    "table-key-properties": ["id"],
    "forced-replication-method": "FULL_TABLE",
    "valid-replication-keys": [],
    "inclusion": "available",
    "selected": true
  }
}
```

- Run the tap and write the data to a file

```powershell
tap-slack --config C:\Singer\slack.config --catalog C:\Singer\catalog.json > data.json
```

- Install the `FileSystem` connector
- Run the SCL

```scl #ignore
- FileRead 'data.json'
| FromSinger handleState: (<> => DoNothing)
| ForEach (Log <>['name'])
```

:::info
The HandleState argument here ignores the state.
The default behaviour is to write it to a file named 'State.json'
:::

You could also pipe the result of the tap directly into Phoenix.

```powershell
tap-slack --config C:\Singer\slack.config --catalog C:\Singer\catalog.json | .\Phoenix.exe run scl  "ReadStandardIn | FromSinger handlestate: (<>=>DoNothing) | Foreach (log <>['name'])"
```

---
title: Search and Tag Items | Phoenix Connector for Relativity Examples
sidebar_label: Search and Tag Items
---

# Search and Tag Items

This example will run a search of a Relativity workspace and set the 'Tags' field of each of the results.
Be sure that the field you are setting (e.g. 'Tags') exists in your workspace before running this.

## Setup

[Instructions on how to install and setup Phoenix and the Phoenix Connector for Relativity®.](relativity.md)

## SCL

Download the SCL here: [relativity-search-and-tag.scl](pathname:///example-files/relativity/relativity-search-and-tag.scl)

To run:

```powershell
PS > ./Phoenix.exe run relativity-search-and-tag.scl
```

```scl
# Set the name of your workspace. You could also use Workspace Artifact Id
- <WorkspaceName> = 'Test Workspace'
- <Search>        = "'Title' LIKE 'Clouds'"  # Define your search here
- <Tag>           = 'Important'

- <FilesToTag> = RelativitySendQuery
                   Workspace: <WorkspaceName>
                   Condition: <Search>
                   Start: 0
                   Length: 100 # The max number of objects to tag

- ForEach <FilesToTag> Action: (
    RelativityUpdateObject
      Workspace: <WorkspaceName>
      ObjectArtifactId: <>["ArtifactId"]
      FieldValues: ('Tags': <Tag>)
  )

- Log $"Tagged {ArrayLength <FilesToTag>} Files."
```

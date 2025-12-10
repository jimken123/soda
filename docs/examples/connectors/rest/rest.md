---
sidebar_label: REST Connector
sidebar_position: 0
description: Examples of how to automatically generate steps from OpenAPI specifications, and include them in your automated forensic and ediscovery workflows.
---

# REST Connector Examples

These are examples of how to use the Phoenix REST connector.

The connector works by generating steps from an OpenAPI specification.

The examples here use the Reveal V2 API.

## Setup

1. Download and set up Phoenix. See the [quick start](../../../quick-start.md) for more info.
2. Add the REST Connector. See [connectors](../../../quick-start.md#connectors)
   for more info on managing connectors.

```poweshell
PS > .\Phoenix.exe connector add Phoenix.Connectors.Rest
```

3. Add the required configuration to `./lib/connectors.json`.
   See [Phoenix Connector for REST](../../../connectors/rest.md)

## Examples

### [Create Reveal Folder](reveal-create-folder.md)

Login to Reveal and create a work folder.

### [Get Document Metadata from Reveal](reveal-get-all-documents.md)

Login to Reveal and retrieve the first 10 documents from a case.

### [Get All Reveal Fields](reveal-get-all-fields.md)

Login to Reveal and retrieve all field profiles and fields.

### [Get All Reveal Folders](reveal-get-all-folders.md)

Login to Reveal, retrieve first the root folder for a case, and then all subfolders.

### [Get Reveal Case Statistics](reveal-get-case-statistics.md)

Login to Reveal and get statistics for a case.

### [Get Reveal Cases](reveal-get-cases.md)

Login to Reveal and get a list of cases.

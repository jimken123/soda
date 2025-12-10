---
sidebar_label: Nuix Connector
sidebar_position: 0
description: Learn how to configure and use the Phoenix Nuix connector to automate forensic workflows, including creating cases, ingesting data, search and exclude, and exporting.
---

# Nuix Connector Examples

## Setup

1. Download and set up Phoenix. See the [quick start](../../../quick-start.md) for more info.
2. Add the Nuix connector. See [connectors](../../../quick-start.md#connectors)
   for more info on managing connectors.

```poweshell
PS > .\Phoenix.exe connector add Phoenix.Connectors.Nuix
```

3. Add the required Nuix configuration to `./lib/connectors.json`.
   See [Nuix Connector Settings](../../../connectors/nuix.md#nuix-connector-settings)
   for more information on how to setup Phoenix to work with a dongle or a license server.
   Here is an example configuration for dongle. If you've added the connector using
   step 2, then you'll only need to add the `settings` block.

```json
"Phoenix.Connectors.Nuix": {
  "id": "Phoenix.Connectors.Nuix",
  "enable": true,
  "version": "0.10.0",
  "settings": {
    "exeConsolePath": "C:\\Program Files\\Nuix\\Nuix 9.0\\nuix_console.exe",
    "version": "9.0",
    "licencesourcetype": "dongle",
    "features": [
      "ANALYSIS",
      "CASE_CREATION",
      "EXPORT_ITEMS",
      "METADATA_IMPORT",
      "OCR_PROCESSING",
      "PRODUCTION_SET"
    ]
  }
}
```

## Examples

### [Download Sample Data](nuix-download-sample-data.md)

Most of the examples use the
[EDRM Micro Dataset](https://edrm.net/resources/data-sets/edrm-micro-datasets/).
This isn't an example, rather some SCL to setup a `data` directory
that can be used for the other examples.

### [Create Case, Ingest and Filter](nuix-create-ingest-filter.md)

Start here. SCL to create a new case, then ingest, tag and filter items.

### [Search and Tag Items](nuix-search-and-tag.md)

An example of how to search and tag items in an existing case.

### [Create Case, Ingest, Filter and Export](nuix-create-ingest-export.md)

A full example of creating a new case, ingesting items, searching and tagging,
excluding items, OCRing, creating item and production sets, exporting concordance,
and generating reports.

This example is more advanced and shows more of the available configuraiton options,
as well as some of the conditional logic available in SCL.

### [Ingest Using a Custom Processing Profile Configured in SCL](nuix-ingest-custom-profile.md)

An example of how to ingest data into an existing case using SCL to fully
customise the processing profile and mime type settings.

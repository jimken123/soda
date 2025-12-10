---
title: EDRM Schema | Schema Examples
sidebar_label: EDRM Schema
---

# EDRM Schema

This is a schema which enforces that data meets the
[EDRM Production Standards](https://edrm.net/resources/frameworks-and-standards/edrm-model/edrm-stages-standards/edrm-production-standards-version-1/).

Download this schema [here](pathname:///example-files/schema/edrm-schema.json).

```json
{
  "title": "EDRM Production Standards",
  "additionalProperties": false,
  "type": "object",
  "required": [
    "ATTACHMENTIDS",
    "BATES RANGE",
    "CUSTODIAN",
    "DOCEXT",
    "DOCID",
    "DOCLINK",
    "FILENAME",
    "RCRDTYPE"
  ],
  "properties": {
    "ATTACHMENTIDS": {
      "type": "string"
    },
    "BATES RANGE": {
      "type": "string"
    },
    "BCC": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "CC": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "CUSTODIAN": {
      "type": "string"
    },
    "DATERECEIVED": {
      "type": "string",
      "format": "date"
    },
    "DATESENT": {
      "type": "string",
      "format": "date"
    },
    "DOCEXT": {
      "type": "string"
    },
    "DOCID": {
      "type": "string"
    },
    "DOCLINK": {
      "type": "string"
    },
    "FILENAME": {
      "type": "string"
    },
    "FOLDER": {
      "type": "string"
    },
    "FROM": {
      "type": "string"
    },
    "HASH": {
      "type": "string"
    },
    "PARENTID": {
      "type": "string"
    },
    "RCRDTYPE": {
      "type": "string"
    },
    "SUBJECT": {
      "type": "string"
    },
    "TIMERECEIVED": {
      "type": "string",
      "format": "time"
    },
    "TIMESENT": {
      "type": "string",
      "format": "time"
    },
    "TO": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "AUTHORS": {
      "type": "string"
    },
    "DATECREATED": {
      "type": "string",
      "format": "date"
    },
    "DATESAVED": {
      "type": "string",
      "format": "date"
    },
    "DOCTITLE": {
      "type": "string"
    }
  }
}
```

---
title: Validate Concordance File Using a Schema | Structured Data Connector Examples
sidebar_label: Validate Concordance File Using a Schema
---

# Validate Concordance File Using a Schema

[Instructions on how to install and setup Phoenix.](structureddata.md)

More details on schemas [here](../../../schemas.md).

```scl #ignore
- <schema> = (
    'title': "Load File Standard 1.0"
    'additionalProperties': True
    'properties': (
      'DocumentId': ('type': "integer")
      'ParentId': ('type': "integer")
      'AttachmentIds': ('type': "array" 'items': ('type': "integer"))
      'NativePath': ('type': "integer")
      'TextPath': ('type': "string")
      'Title': ('type': "string")
      'Subject': ('type': "string")
      'Author': ('type': "string")
      'CreateDate': ('type': "string" format: 'date-time')
      'ModifyDate': ('type': "string" format: 'date-time')
      'FileExtension': ('type': "string" pattern: '\.\w{1,8}')
      'MD5': ('type': "string" pattern: '[a-fA-F\d]{32}')
    )
    'required': ["DocumentId", "ParentId", "NativePath", "TextPath", "CreateDate", "MD5"]
  )

- Validate EntityStream: <data> Schema: <schema>
| Foreach (Print <>)
```

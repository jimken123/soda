---
title: Sequence Configuration Language Examples
sidebar_label: SCL / Core
---

# SCL / Core

## Setup

See the [quick start](../quick-start.md) for more info on
how to download and set up Sequence.

## Generate Sequence Documentation

We use SCL to generate the [Sequence Steps](/steps/all) documentation.
Here's how it's done:

```scl
- <root> = 'steps'
- <pages> = (GenerateDocumentation)['AllPages']
- <pages> | ArrayDistinct (From <> 'Directory')
| ForEach (
    If (<>['Directory'] != 'null') CreateDirectory (PathCombine [<root>, (From <> 'Directory')])
  )
- <pages> | ForEach (
    - <dir> = If (<>['Directory'] == 'null') Then: ('') Else: (From <> 'Directory')
    - FileWrite
        Data: <>['FileText']
        Path: (PathCombine [<root>, <dir>, (From <> 'FileName')])
  )
```

:::caution
This requires the [FileSystem](../connectors/filesystem.md) connector
:::

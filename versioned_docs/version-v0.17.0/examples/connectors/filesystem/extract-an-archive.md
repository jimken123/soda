---
title: Extract an Archive | File System Connector Examples
sidebar_label: Extract an Archive
---

# Extract an Archive

[Instructions on how to install and setup Sequence and the FileSystem Connector.](filesystem.md)

This workflow:

1. Extracts all files in an archive to a new location
2. Logs the names of all files in that location

```scl
- <destination> = 'C:/Documents/Data'
- FileExtract ArchiveFilePath: 'C:/Documents/MyArchive.zip'  Destination: <destination>
- DirectoryGetItems <destination>
| Foreach (log <>['Name'])
```

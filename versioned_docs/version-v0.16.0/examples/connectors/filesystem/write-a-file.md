---
title: Write a File | File System Connector Examples
sidebar_label: Write a File
---

# Write a File

[Instructions on how to install and setup Sequence and the FileSystem Connector.](filesystem.md)

This workflow:

1. Creates a path from 'C:/Documents' and 'MyFile.txt'
2. Compresses a string and writes it to a file in that location

```scl
- <path> = PathCombine ['C:/Documents', 'MyFile.txt']
- "MyData"
| FileWrite <path> Compress: true
```

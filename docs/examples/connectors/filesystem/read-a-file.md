---
title: Read a File | File System Connector Examples
sidebar_label: Read a File
---

# Read a File

[Instructions on how to install and setup Sequence and the FileSystem Connector.](filesystem.md)

This workflow:

1. Creates a path from 'C:/Documents' and 'MyFile.txt'
2. Reads the file at that location
3. Prints the text of that file to the console

```scl
PathCombine ['C:/Documents', 'MyFile.txt']
| FileRead
| Print
```

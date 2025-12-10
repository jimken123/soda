---
title: All Steps | File System Connector Documentation
sidebar_label: FileSystem
description: List of all steps for File System Connector. Phoenix connector for interacting with file systems of various OSes. Includes steps to interact with files, directories, paths, and compression.
tags: [Contents, FileSystem]
hide_title: true
hide_table_of_contents: true
---

# FileSystem Steps

|Step                                                 |Summary                                                                                                                                    |
|:----------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
|[DeleteItem](./FileSystem/DeleteItem.md)              |Deletes a file or folder from the file system.                                                                                             |
|[DirectoryCopy](./FileSystem/DirectoryCopy.md)        |Copy a directory                                                                                                                           |
|[DirectoryCreate](./FileSystem/DirectoryCreate.md)    |Creates a new directory in the file system. Will create all directories and subdirectories in the specified path unless they already exist.|
|[DirectoryExists](./FileSystem/DirectoryExists.md)    |Returns whether a directory on the file system exists.                                                                                     |
|[DirectoryGetItems](./FileSystem/DirectoryGetItems.md)|Gets all items in a directory                                                                                                              |
|[DirectoryMove](./FileSystem/DirectoryMove.md)        |Move a directory                                                                                                                           |
|[FileCopy](./FileSystem/FileCopy.md)                  |Copy a file                                                                                                                                |
|[FileExists](./FileSystem/FileExists.md)              |Returns whether a file on the file system exists.                                                                                          |
|[FileExtract](./FileSystem/FileExtract.md)            |Extract a file in the file system.                                                                                                         |
|[FileMove](./FileSystem/FileMove.md)                  |Move a file                                                                                                                                |
|[FileRead](./FileSystem/FileRead.md)                  |Reads text from a file.                                                                                                                    |
|[FileWrite](./FileSystem/FileWrite.md)                |Writes a file to the local file system.                                                                                                    |
|[PathCombine](./FileSystem/PathCombine.md)            |Combine Paths. If the resulting path is not fully qualified it will be prefixed with the current working directory.                        |
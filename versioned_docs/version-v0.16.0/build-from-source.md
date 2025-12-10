---
title: Build Sequence from Source
sidebar_label: Build from Source
description: Instructions for building releases from source using .NET 6. Sequence is a flexible and powerful open-source automation toolkit for forensics and ediscovery.
---

# Build from Source

[Sequence Console](https://gitlab.com/sequence/console)
is the command-line application for executing SCL workflows.
We're currently only targeting the `win10-x64` runtime for our
CI builds, but it's possible to target any
[OS supported by .NET 6](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md).

Release packages are available from [nuget.org](https://www.nuget.org/profiles/Sequence).

## Example - Build Sequence Console for Linux

Building on Ubuntu 20.04:

```bash
git clone git@gitlab.com:sequence/console.git
cd console/
# check out the latest release version
git checkout v0.16.1
# build a self-contained package targeting linux
dotnet publish -o ./publish -r linux-x64 -c Release --self-contained
# test that it has worked
publish/sequence run scl "FileRead './publish/connectors.json' | FromJson | Format"
```

To find out the latest release version, see the [download](/download) page.

---
description: Sequence is an open-source automation toolkit for creating repeatable, predictable, and defensible end-to-end forensic and ediscovery workflows.
---

# What is Sequence

Sequence is an automation toolkit for forensics and e-discovery.

It consists of:

- [Core](connectors/core.md) which is:
  - An interpreter for the [Sequence Configuration Language](sequence-configuration-language.md)
  - A collection of [application-independent Steps](/steps/Core)
  - An SDK that allows [developers to create Connectors](developers-guide.md)
- Connectors that interact with various applications:
  - [FileSystem](connectors/filesystem.md)
  - [Nuix](connectors/nuix.md)
  - [PowerShell](connectors/powershell.md)
  - [Relativity](connectors/relativity.md)
  - [REST](connectors/rest.md)
  - [Singer](connectors/singer.md)
  - [SQL](connectors/sql.md)
  - [StructuredData](connectors/structureddata.md)
  - [Tesseract](connectors/tesseract.md)
  - [TSK/Autopsy](connectors/tsk.md)

## Sequence Configuration Language

At the heart of Sequence is the Sequence Configuration Language (SCL),
a natural-language-like way to configure complex workflows.
The starting point for SCL was the simplicity of YAML, but we wanted
to supercharge it with scripting-language-like functionality so that
any workflow could be automated.

The [SCL documentation](sequence-configuration-language.md) has a description
of all the available language features.

## Download and Try

- Download [here](/download)
- A quick start is available [here](quick-start.md)

## Source Code

- [Available on GitLab](https://gitlab.com/sequence)
- [Release Notes](https://gitlab.com/sequence/console/-/blob/main/CHANGELOG.md)

## Steps and Sequences

- A `Step` is a unit of work in an application such as
  creating a case, ingesting data, searching or exporting data
- A `Sequence` is a series of `Steps` that are executed in order.
  Workflows are defined using SCL and Sequence enables data and configuration
  to be passed between Steps, including between different applications.

More about [steps](sequence-configuration-language.md#steps)
and [sequences](sequence-configuration-language.md#sequences).

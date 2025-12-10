---
title: Hash Step | Core SDK Documentation
sidebar_label: Hash
description: Produce a hash for some data using the specified hash algorithm. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Hash
_Alias_:`Hash`

_Output_:`StringStream`

Produce a hash for some data using the specified hash algorithm


|Parameter|Type                                      |Required|Position|Default Value|Summary                          |
|:--------|:----------------------------------------:|:------:|:------:|:-----------:|:--------------------------------|
|Data     |`string`                                  |✔       |1       |             |The string or data stream to hash|
|Algorithm|[HashAlgorithm](../Enums/HashAlgorithm.md)|        |2       |MD5          |The hash algorithm to use        |
---
title: ExportDeduplication | Enums
sidebar_label: ExportDeduplication
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Enums, Unit]
hide_title: true
hide_table_of_contents: true
---

# ExportDeduplication
Method of deduplication to use for a top-level item export.


|Name           |Summary                                                                                                      |
|:--------------|:------------------------------------------------------------------------------------------------------------|
|None           |No deduplication.                                                                                            |
|MD5            |If an item has no MD5, it is not removed. If two items have the same MD5, the first item by position is kept.|
|MD5PerCustodian|Same as MD5, except items assigned to different custodians are not treated as duplicates.                    |
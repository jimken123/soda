---
title: DeduplicateBy | Enums
sidebar_label: DeduplicateBy
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Enums, Unit]
hide_title: true
hide_table_of_contents: true
---

# DeduplicateBy
Whether to deduplicate as a family or individual


|Name      |Summary                                                                                                                                                                                                                                                                           |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Individual|Deduplication by individual treats each item as an individual and an attachment or embedded item has the same priority for deduplication as a loose file.                                                                                                                         |
|Family    |Items can be treated as a family where only the top-level item of a family is deduplicated and the descendants are classified as original or duplicate with their family as a group. The top-level item does not have to be in the set for its descendants to classified this way.|
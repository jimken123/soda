---
title: SearchType | Enums
sidebar_label: SearchType
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Enums, Unit]
hide_title: true
hide_table_of_contents: true
---

# SearchType
Defines the type of search that is performed.


|Name               |Summary                                                                           |
|:------------------|:---------------------------------------------------------------------------------|
|ItemsOnly          |Return only the items responsive to the search terms.                             |
|Descendants        |Return only the descendants of the items responsive to the search terms.          |
|Families           |Find entire families.                                                             |
|ItemsAndDescendants|Same as Descendants, but including the items responsive to the search terms.      |
|ItemsAndDuplicates |Finds items and their duplicates.                                                 |
|ThreadItems        |Items responsive to the search terms and all items in the same discussion threads.|
|TopLevelItems      |Returns the top-level items for the collection returned by a search.              |
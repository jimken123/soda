---
title: ItemSortOrder | Enums
sidebar_label: ItemSortOrder
description: . Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Enums, Unit]
hide_title: true
hide_table_of_contents: true
---

# ItemSortOrder
Selects the method of sorting a set of items


|Name                      |Summary                                                                                                                                                                                                             |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Position                  |Default sort order (fastest). Sorts by position within the evidence tree. Sorts as documented in ItemUtility.sortItemsByPosition(Collection).                                                                       |
|TopLevelItemDate          |Sorts families by top-level item date and then sorts each individual family into position within the evidence tree. Sorts as documented in ItemUtility.sortItemsByTopLevelItemDate(Collection).                     |
|TopLevelItemDateDescending|Sorts families descending by top-level item date and then sorts each individual family into position within the evidence tree. Sorts as documented in ItemUtility.sortItemsByTopLevelItemDateDescending(Collection).|
|DocumentId                |Sorts items based on their document IDs for the production set. Only valid when reordering production sets.                                                                                                         |
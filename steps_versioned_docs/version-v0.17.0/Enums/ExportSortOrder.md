---
title: ExportSortOrder | Enums
sidebar_label: ExportSortOrder
description: . Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Enums, Unit]
hide_title: true
hide_table_of_contents: true
---

# ExportSortOrder
Selects the method of sorting a set of items


|Name                      |Summary                                                                                                                       |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
|None                      |Exports the items as ordered in the production set. Only works if ExportTraversalStrategy is Items.                           |
|Position                  |Sorts by position within the evidence tree.                                                                                   |
|TopLevelItemDate          |Sorts families by top-level item date and then sorts each individual family into position within the evidence tree.           |
|TopLevelItemDateDescending|Sorts families descending by top-level item date and then sorts each individual family into position within the evidence tree.|
|DocumentId                |Sorts items based on their document IDs for the production set. Only valid when exporting production sets.                    |
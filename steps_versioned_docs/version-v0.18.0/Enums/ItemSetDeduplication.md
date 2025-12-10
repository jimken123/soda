---
title: ItemSetDeduplication | Enums
sidebar_label: ItemSetDeduplication
description: . Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Enums, Unit]
hide_title: true
hide_table_of_contents: true
---

# ItemSetDeduplication
The means of deduplicating items by key and prioritizing originals in a tie-break. 


|Name              |Summary                                                                                                                                                                                                 |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Default           |MD5RankedCustodian if a custodian ranking is given, MD5 otherwise                                                                                                                                       |
|MD5               |MD5 results in items with the same MD5 hash being identical. Tie breaking is by highest path order.                                                                                                     |
|MD5PerCustodian   |MD5 Per Custodian results in items with the same MD5 hash and custodian being identical. Tie breaking is by highest path order.                                                                         |
|MD5RankedCustodian|MD5 Ranked Custodian results in items with MD5 hash being identical. Tie breaking is by the item with the highest ranked custodian or highest path order if custodian ranking is equal.                 |
|Scripted          |Scripted results in items being deduplicated based on an expression defined by the script and passed to ItemSet.addItems. It is an error to add items to this Item Set without supplying the expression.|
|None              |None results in all items being added to the set without deduplication.                                                                                                                                 |
---
title: NuixReorderProductionSet Step | Nuix Connector Documentation
sidebar_label: NuixReorderProductionSet
description: Reorders and renumbers the items in a production set.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixReorderProductionSet
_Alias_:`NuixReorderProductionSet`, `NuixReorderProduction`

_Output_:`Unit`

*Requires Nuix.Version 5.2*

*Requires Nuix.Features: PRODUCTION_SET*

Reorders and renumbers the items in a production set.


|Parameter                           |Type                                      |Required|Position|Default Value            |Example        |Summary                                                                                                                                                                                      |
|:-----------------------------------|:----------------------------------------:|:------:|:------:|:-----------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ProductionSetName<br/>_Set_         |`string`                                  |✔       |1       |                         |               |The production set to reorder.                                                                                                                                                               |
|SortOrder<br/>_Order_<br/>_ItemSort_|[ItemSortOrder](../Enums/ItemSortOrder.md)|        |2       |Position                 |               |The method of sorting items during the renumbering.                                                                                                                                          |
|CasePath<br/>_Directory_            |`string`                                  |        |        |Use the current open case|C:/Cases/MyCase|The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
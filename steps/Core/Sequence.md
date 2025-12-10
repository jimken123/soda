---
title: Phoenix Step | Core SDK Documentation
sidebar_label: Phoenix
description: A chain of steps to be run one after the other.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Phoenix
_Alias_:`Phoenix`

_Output_:`The same type as the final step`

A chain of steps to be run one after the other.


|Parameter   |Type        |Required|Position|Default Value|Summary                                                  |
|:-----------|:----------:|:------:|:------:|:-----------:|:--------------------------------------------------------|
|FinalStep   |`T`         |✔       |        |             |The final step of the Phoenix. Will be the return value.|
|InitialSteps|List<`unit`>|        |        |Empty        |The steps of this Phoenix apart from the final step.    |
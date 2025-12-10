---
title: ErrorBehavior | Enums
sidebar_label: ErrorBehavior
description: . Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Enums, Unit]
hide_title: true
hide_table_of_contents: true
---

# ErrorBehavior
How to respond to a data error


|Name   |Summary                                                         |
|:------|:---------------------------------------------------------------|
|Fail   |On Error: Stop the Phoenix and return failure                  |
|Error  |On Error: Emit a warning and skip the entity                    |
|Warning|On Error: Emit a warning but do allow the entity                |
|Skip   |On Error: Skip the entity but do not emit a warning             |
|Ignore |On Error: Allow the entity and do not emit a warning            |
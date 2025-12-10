---
title: Clone Step | Core SDK Documentation
sidebar_label: Clone
description: Creates an array by cloning an element.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Clone
_Alias_:`Clone`

_Output_:`ArrayList<T>`

Creates an array by cloning an element.


|Parameter         |Type |Required|Position|Default Value|Summary                                  |
|:-----------------|:---:|:------:|:------:|:-----------:|:----------------------------------------|
|Element           |`T`  |✔       |1       |             |The element to clone.                    |
|Number<br/>_Times_|`int`|        |2       |1            |The number of times to clone the element.|
## Examples
### Example 1
#### SCL
```scl
Clone Element: 'hello' Times: 2
```
#### Expected Output
```scl
["hello", "hello"]
```
### Example 2
#### SCL
```scl
Clone 1 Number: 3
```
#### Expected Output
```scl
[1, 1, 1]
```
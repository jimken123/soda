---
title: ArrayGroupBy Step | Core SDK Documentation
sidebar_label: ArrayGroupBy
description: Group elements in an array or entities in a stream using a function. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayGroupBy
_Alias_:`ArrayGroupBy`, `Group`

_Output_:`Array of Entity`

Group elements in an array or entities in a stream using a function. Entities in the resulting array will have two properties `Key` and `Values`. The `Key` will be set according to the result of the function.


|Parameter                    |Type      |Required|Position|Summary                            |
|:----------------------------|:--------:|:------:|:------:|:----------------------------------|
|Array                        |`array<T>`|✔       |1       |The array or entity stream to group|
|Function<br/>_By_<br/>_Using_|`T`       |✔       |2       |A function to use to group entities|
## Examples
#### SCL
```scl
Group Array: [
  ('type': 'A', 'value': 1)
  ('type': 'B', 'value': 2)
  ('type': 'A', 'value': 3)
] Using: (<item>['type'])
```
#### Expected Output
```scl
[('Key': "A" 'Values': [('type': "A" 'value': 1), ('type': "A" 'value': 3)]), ('Key': "B" 'Values': [('type': "B" 'value': 2)])]
```
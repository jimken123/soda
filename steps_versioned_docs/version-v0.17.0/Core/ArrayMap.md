---
title: ArrayMap Step | Core SDK Documentation
sidebar_label: ArrayMap
description: Map each element of an array or entity stream to a new value. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ArrayMap
_Alias_:`ArrayMap`, `EntityMap`, `Map`

_Output_:`Array of T`

Map each element of an array or entity stream to a new value. This Step can be used to update elements of an array, or to update entity property values. The new value must have the same type as the original value.


|Parameter           |Type        |Required|Position|Summary                                                     |
|:-------------------|:----------:|:------:|:------:|:-----------------------------------------------------------|
|Array               |`array<TIn>`|✔       |1       |The array or entity stream to map                           |
|Function<br/>_Using_|`TIn`       |✔       |2       |A function to update the values and return the mapped entity|
## Examples
### Example 1
#### SCL
```scl
ArrayMap [1, 2, 3, 4] Function: (<> + 1)
```
#### Expected Output
```scl
[2, 3, 4, 5]
```
### Example 2
#### SCL
```scl
ArrayMap [1,2,3] ($"Num {<>}")
```
#### Expected Output
```scl
["Num 1", "Num 2", "Num 3"]
```
### Example 3
#### SCL
```scl
ArrayMap [(a: 1), (a: 2), (a: 3), (a: 4)] Function: (<>['a'] + 1)
```
#### Expected Output
```scl
[2, 3, 4, 5]
```
### Example 4
#### SCL
```scl
Map Array: [
  ('type': 'A', 'value': 1)
  ('type': 'B', 'value': 2)
  ('type': 'A', 'value': 3)
] Using: (In <> Set: 'value' To: (<>['value'] + 1))
```
#### Expected Output
```scl
[('type': "A" 'value': 2), ('type': "B" 'value': 3), ('type': "A" 'value': 4)]
```
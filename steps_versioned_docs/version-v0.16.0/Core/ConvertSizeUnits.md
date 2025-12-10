---
title: ConvertSizeUnits Step | Core SDK Documentation
sidebar_label: ConvertSizeUnits
description: Convert a string representing a data size to  a string representing the same size but with different units.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# ConvertSizeUnits
_Alias_:`ConvertSizeUnits`, `ConvertFileSize`

_Output_:`StringStream`

Convert a string representing a data size to  a string representing the same size but with different units.


|Parameter        |Type                            |Required|Position|Summary                                           |
|:----------------|:------------------------------:|:------:|:------:|:-------------------------------------------------|
|String<br/>_From_|`string`                        |✔       |1       |The string containing the original value and units|
|Units<br/>_To_   |[SizeUnit](../Enums/SizeUnit.md)|✔       |2       |The units to convert to                           |
## Examples
### Example 1
Basic Replacement
#### SCL
```scl
ConvertSizeUnits '1024 Kb' SizeUnit.Megabytes
```
#### Expected Output
```scl
1.00 MB
```
### Example 2
Basic Replacement
#### SCL
```scl
ConvertSizeUnits '1024' SizeUnit.Kilobytes
```
#### Expected Output
```scl
1.00 KB
```
### Example 3
Basic Replacement
#### SCL
```scl
ConvertSizeUnits '10 Kb' SizeUnit.Bytes
```
#### Expected Output
```scl
10240.00 B
```
### Example 4
Basic Replacement
#### SCL
```scl
ConvertSizeUnits '1.5 Kb' SizeUnit.Bytes
```
#### Expected Output
```scl
1536.00 B
```
### Example 5
Basic Replacement
#### SCL
```scl
ConvertFileSize From: '250 Kb' To: SizeUnit.Megabytes
```
#### Expected Output
```scl
0.24 MB
```
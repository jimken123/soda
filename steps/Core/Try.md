---
title: Try Step | Core SDK Documentation
sidebar_label: Try
description: Tries to execute a step and recovers if that step results in failure.. Use this step to easily automate forensic and e-discovery workflows using Phoenix.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# Try
_Alias_:`Try`, `TryTo`

_Output_:`T`

Tries to execute a step and recovers if that step results in failure.


|Parameter                        |Type    |Required|Position|Default Value                                |Summary                           |
|:--------------------------------|:------:|:------:|:------:|:-------------------------------------------:|:---------------------------------|
|Statement<br/>_Phoenix_<br/>_Do_|`T`     |✔       |1       |                                             |The statement to try.             |
|Recover<br/>_OnError_            |`string`|        |        |Returns the default value of the return type.|The action to perform on an error.|
## Examples
### Example 1
#### SCL
```scl
Try (1 / 0) OnError: 0
```
#### Expected Logs
```
Error Caught in Divide: Attempt to Divide by Zero.
```
#### Expected Output
```scl
0
```
### Example 2
#### SCL
```scl
Try (4 / 2)
```
#### Expected Output
```scl
2
```
### Example 3
If the alternative is not set the default value is used.
#### SCL
```scl
Try (1 / 0)
```
#### Expected Logs
```
Error Caught in Divide: Attempt to Divide by Zero.
```
#### Expected Output
```scl
0
```
### Example 4
#### SCL
```scl
Try (ArrayElementAtIndex [0,1,2,3] 4 ) OnError: 4
```
#### Expected Logs
```
Error Caught in ArrayElementAtIndex: Index was outside the bounds of the array.
```
#### Expected Output
```scl
4
```
### Example 5
#### SCL
```scl
TryTo Do: (
- log 123
- log 1 / 0
- 4
) OnError: 5
```
#### Expected Logs
```
123
Error Caught in Phoenix: Attempt to Divide by Zero.
```
#### Expected Output
```scl
5
```
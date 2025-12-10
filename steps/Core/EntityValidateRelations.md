---
title: EntityValidateRelations Step | Core SDK Documentation
sidebar_label: EntityValidateRelations
description: For each entity in the stream, check that the value of the `ParentIdProperty` is the value of the `IdProperty` for at least one entity in the stream.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# EntityValidateRelations
_Alias_:`EntityValidateRelations`, `ValidateRelations`

_Output_:`Array<T>`

For each entity in the stream, check that the value of the `ParentIdProperty` is the value of the `IdProperty` for at least one entity in the stream.


|Parameter                        |Type                                      |Required|Position|Default Value|Summary                                                                               |
|:--------------------------------|:----------------------------------------:|:------:|:------:|:-----------:|:-------------------------------------------------------------------------------------|
|EntityStream                     |`array<entity>`                           |✔       |1       |             |The stream of entities to validate                                                    |
|IdProperty<br/>_ExistsIn_        |`string`                                  |✔       |2       |             |The entity property which will be used to create a lookup table.                      |
|ParentIdProperty<br/>_LookupThat_|`string`                                  |✔       |3       |             |The step will check that the value of this entity property exists in the lookup table.|
|ErrorBehavior                    |[ErrorBehavior](../Enums/ErrorBehavior.md)|        |4       |Error        |How to behave if an error occurs.                                                     |
|IgnoreEmpty                      |`bool`                                    |        |5       |true         |If true, empty values will be ignored                                                 |
## Examples
### Example 1
#### SCL
```scl
EntityValidateRelations [('id': 1), ('id': 2 'parentid': 1), ('parentid': 1), ('id': 3 'parentid': 100), ('id': 4 'parentid': "")] 'id' 'parentid' 'Error'
```
#### Expected Logs
```
The id '100' does not exist.
```
#### Expected Output
```scl
[('id': 1), ('id': 2 'parentid': 1), ('parentid': 1), ('id': 4 'parentid': "")]
```
### Example 2
#### SCL
```scl
EntityValidateRelations [('id': 1), ('id': 2 'parentid': 1), ('parentid': 1), ('id': 3 'parentid': 100), ('id': 4 'parentid': "")] 'id' 'parentid' 'Warning'
```
#### Expected Logs
```
The id '100' does not exist.
```
#### Expected Output
```scl
[('id': 1), ('id': 2 'parentid': 1), ('parentid': 1), ('id': 3 'parentid': 100), ('id': 4 'parentid': "")]
```
### Example 3
#### SCL
```scl
EntityValidateRelations [('id': 1), ('id': 2 'parentid': 1), ('parentid': 1), ('id': 3 'parentid': 100), ('id': 4 'parentid': "")] 'id' 'parentid' 'Skip'
```
#### Expected Output
```scl
[('id': 1), ('id': 2 'parentid': 1), ('parentid': 1), ('id': 4 'parentid': "")]
```
### Example 4
#### SCL
```scl
EntityValidateRelations [('id': 1), ('id': 2 'parentid': 1), ('parentid': 1), ('id': 3 'parentid': 100), ('id': 4 'parentid': "")] 'id' 'parentid' 'Ignore'
```
#### Expected Output
```scl
[('id': 1), ('id': 2 'parentid': 1), ('parentid': 1), ('id': 3 'parentid': 100), ('id': 4 'parentid': "")]
```
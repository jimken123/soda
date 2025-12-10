---
title: DocumentationCreate Step | Core SDK Documentation
sidebar_label: DocumentationCreate
description: Generates documentation for all available steps.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Core]
hide_title: true
hide_table_of_contents: true
---

# DocumentationCreate
_Alias_:`DocumentationCreate`, `DocGen`, `GenerateDocumentation`

_Output_:`Entity`

Generates documentation for all available steps.


|Parameter|Type    |Required|Position|Default Value|Summary                                                                               |
|:--------|:------:|:------:|:------:|:-----------:|:-------------------------------------------------------------------------------------|
|RootUrl  |`string`|        |1       |Empty String |Root URL of all links in the documentation. You should include a slash `/` at the end.|
## Examples
### Example 1
Logs all the file paths
#### SCL
```scl
- <root> = 'sequence/steps'
- (DocumentationCreate)['AllPages'] | ForEach (
    - <path> = $"{<root>}/{<>['Directory']}/{<>['FileName']}"
    - log <path>
)
```
### Example 2
#### SCL
```scl
GenerateDocumentation | EntityFormat
```
#### Expected Output
```scl
(
	'MainContents': (
		'PageType': "Contents"
		'FileName': "all.md"
		'Title': "all"
		'FileText': "..."
		'Directory': null
	)
  'Categories': [
    (
      'CategoryContents': (
        'Category': "Core"
        'PageType': "Contents"
        'FileName': "Core.md"
        'Title': "Core"
        'FileText': "..."
        'Directory': null
      )
      'Steps': [
				(
					'Category': "Core"
					'StepName': "And"
					'Aliases': ["And"]
					'Summary': null
					'ReturnType': "Boolean"
					'StepParameters': [
						(
							'Name': "Terms"
							'Type': "Array<bool>"
							'Summary': null
							'Required': True
							'Aliases': null
						)
					]
					'PageType': "Step"
					'FileName': "And.md"
					'Title': "And"
					'FileText': ".."
					'Directory': "Core"
				),
        ...
      ]
    ),
    ...
  ]
  'Enums': [
    (
      'Values': [
        ('Name': "Default" Summary: "The default encoding."),
        ('Name': "Ascii" Summary: "Ascii"),
        ('Name': "BigEndianUnicode" Summary: "Unicode with big-endian byte order"),
        ('Name': "UTF8" Summary: "UTF8 with no byte order mark."),
        ('Name': "UTF8BOM" Summary: "UTF8 with byte order mark."),
        ('Name': "UTF32" Summary: "UTF32"),
        ('Name': "Unicode" Summary: "Unicode with little-endian byte order")
      ]
      'PageType': "Enums"
      'FileName': "EncodingEnum.md"
      'Title': "EncodingEnum"
      'FileText': ""
      Directory: ""
    ),
    ...
  ]
  'AllPages': [
    (
      'PageType': "Contents"
      'FileName': "all.md"
      'Title': "all"
      'FileText': "..."
      'Directory': null
    ),
    (
      'Category': "Core"
      'PageType': "Contents"
      'FileName': "Core.md"
      'Title': "Core"
      'FileText': "..."
      'Directory': null
    ),
    ...
  ]
)

```
# Phoenix Configuration Language Grammar Test

Dev Page to Test SCL Grammar Parsing in SCL.

```scl
#Comment
# with a nested # comment /* and another */

- Print ( 1 + 2 - 3 )
- <half> = 1 / 2 * 3
- <True> = 1 == 1 && 2 <= 3 && 4 >= 4 # comment
- <False> = 1 != 1 || 2 ^ 1 % 2 == 2 /**/

/*
- Step1
- Step2
# Nested
" 'a string' "
*/

/* Block Comment with a /* nested */ */

- <multiline> = """
Three double quotes start
A multiline string with no
"Escaping" needed
/* comment */
"""

- <string> = "ABC"

- <interpolatedA> = $"hello {<name>}"

- <interpolatedB> = $"hello {
  1 + 2 + 3
}"

- <multilineA> = "A BC\r \n \\ \""

- <multilineB> = '
  this is a
  "string"
  with /* comments */
  # inside
'

- <StringEscape> = "this is a  \"string\" key: 123 'string key': 456 compound.key: 789"

- "comments /* inside */ a string"

- Print Value:'Something'

- Print Value: (Nested Parameter: (1+1))
- Print Value: ( Nested Parameter: (
   NestedAgain Param: true
))

- <Entity> = (
    key          : 123
    anotherkey   : '!!!'
    'string key' : Enum.Value
    compound.key : 789
  )

- <Entity> =
  (
    key: 123,
    'string key': ( 'nested key': 'hello' )
  )

- <bools> = [true, TRUE, false, falsE]
- <numbers> = [1, 23, 45.678]
- <enum> = enum.Value
- <date> = 1990-01-06T01:23:45
- FromJson

# Create Fields
- ForEach <FieldsToCreate> Action: (
    - <FieldId> = RelativityCreateField <WorkspaceName> <>
    - Log $"Created Field '{<>}' with id {<FieldId>}"
  )

- NuixCreateCase
    CaseName: <CaseName>
    CasePath: <CasePath>
    Investigator: <Investigator>

- NuixExportConcordance
    ExportPath: <ExportPath>
    ProductionSet: <CaseDetails>['ProductionSetName']
    TraversalStrategy: ExportTraversalStrategy.Items
    #LoadFileOptions: (metadataProfile: <MetadataProfile>)
    ExportOptions: (
      native: (path: 'NATIVE' naming: 'document_id')
      text: (path: 'TEXT' naming: 'document_id')
    )

- If (NuixCountItems Search: 'tag:Encrypted' > 0) Then: (
    - NuixAddToProductionSet ProductionSet: 'EncryptedItems' Search: 'tag:Encrypted'
    - NuixExportConcordance
        ExportPath: <EncryptedPath>
        ProductionSet: 'EncryptedItems'
        ExportOptions: (native: (naming: 'guid'))
  ) Else: (Log 'No encrypted items found to export')
```

# Schemas

Schemas are a way to ensure that your data (entities, arrays or streams)
have a particular structure, for example you can control which properties
are present and what types they have.

### Steps which use JSON Schema

- `CreateSchema` creates a schema from an array of entities.

The step will produce the most restrictive schema possible.

```scl
- CreateSchema [('Foo': 1), ('Foo': 2)]
| Log
```

Please note that this step is quite expensive so if you have a large array of entities
you should use `ArrayTake 100` to use only the first hundred entities to create the schema.

- `Transform` tries to adjust entities so that they fit a schema.

This example transforms the 'Foo' value from a string to an integer.

```scl
- <schema> = FromJSON '{"type": "object", "properties": {"foo": {"type": "integer"}}}'
- <entities> = [('Foo': '1'), ('Foo': '2'), ('Foo': '3')]
- <results> = Transform <entities> <schema>
- <results> | ForEach (Log <>)
```

You can provide [additional arguments](#error-behavior) to control how properties
are transformed and what happends when there are errors.

- `Validate` ensures that every entity in an array matches the schema

This example filters the entities to only those where 'Foo' is a multiple of 2.

You could change the Error Behavior to do act differently for elements which do not match.

```scl
- <schema> = FromJSON '{"type": "object", "properties": {"foo": {"type": "integer", "MultipleOf": 2}}}'
- <entities> = [('Foo': 1), ('Foo': 2), ('Foo': 3), ('Foo': 4)]
- <results> = Validate <entities> <schema> ErrorBehavior: 'Skip'
- <results> | ForEach (Log <>)
```

## Error Behavior

In the `Transform` and `Validate` steps, when there are entities that fail validation,
the output depends on the argument passed to the `ErrorBehavior` parameters.

The possible values for [`ErrorBehavior`](/steps/Enums/ErrorBehavior) are:

| Value   | Description                                                             |
| ------- | ----------------------------------------------------------------------- |
| Fail    | Stop at the first error that is encountered                             |
| Error   | Emit non-terminating error and filter out entities that fail validation |
| Warning | Emit warning but do nothing                                             |
| Skip    | Filter out entities but do not emit warning                             |
| Ignore  | Ignore                                                                  |

## Working with Regexes

You can use the `pattern` property to specify a regular expression that the property must match.

```scl
- <entities> = [('foo': 'abc'), ('foo': 'abc123')]
- <schema> = (properties.foo: (type:'string', pattern: '\A[a-z]+\Z'))

# Use validate to filter out the entities which don't match the schema
- <validated> = <entities> | Validate <schema> ErrorBehavior: 'skip'

# Print the entities. Note that only the first is printed
- ForEach <validated> (Log Value: <>)
```

## Working with Booleans

You can indicate a boolean property with `type: boolean`. The `Transform` step allows you to convert string values to booleans by specifying the `BooleanTrueFormats` and `BooleanFalseFormats` properties.

```scl
- <entities> = [('Name': 'abc', 'IsGood': 'yes'), ('Name': 'yes', IsGood: 'no')]
- <schema> = (properties: (Name: (type: 'string'), IsGood: (type: 'boolean')))

- <transformed> = <entities> | Transform <schema>
BooleanTrueFormats: 'yes'
BooleanFalseFormats: 'no'
  RemoveExtraProperties:false

#Print the entities. Note that only the first is printed
- ForEach <transformed> (Log Value: <>)
```

:::note
These properties can also take an `Array<String>` to indicate multiple string map to a boolean value or an `Entity` to specify different mappings for different properties.
:::

## Working with Dates

To specify that a property should be a date, use the type `string` and the format `date-time`

```json
{
  "properties": {
    "Foo": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

Use can use the `Transform` step to change a `string` property which contains a date in a particular format to a `DateTime`.

The `DateInputFormats` Parameter of the `Transform` step lets you define either:

- A `string` format to use for each `date-time` property
- An `Array<string>` of possible formats to try for each `date-time` property
- An entity mapping property names to either a `string` or `Array<string>` allowing you to define custom handling for each `date-time` property individually.

```scl
- <entities> = [(DayFirst: "13-12-1989",YearFirst: "1989/12/13"), (DayFirst: "20-02-2003", YearFirst: "2003-02-20")]
- <schema> = (properties: (DayFirst: (type: "string",format: "date-time"), YearFirst: (type: "string",format: "date-time")))
- <dateInputFormats> = (DayFirst: "dd-MM-yyyy", YearFirst: ["yyyy/MM/dd", "yyyy-MM-dd"])

- <transformed> = <entities> | Transform <schema> DateInputFormats: <dateInputFormats>

#Print both entities, note that each has it's dates in the same format
- ForEach <transformed> (Log Value: <>)
```

:::caution

The Json Schema also provides `date` and `time` formats. Be careful with these as they will be checked by the `Validate` step but not transformed into by the `Transform` step.

:::

## Resources for JSON Schemas:

- [Schema Examples](examples/schema-examples)
- [Official Website](https://json-schema.org/)
- [JSON Schema Reference](https://json-schema.org/understanding-json-schema/reference/index.html)
- [Online Validator](https://www.jsonschemavalidator.net/)

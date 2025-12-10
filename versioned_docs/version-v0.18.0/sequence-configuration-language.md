# Phoenix Configuration Language

SCL is the configuration language for defining automated forensic and
ediscovery workflows, with features to simplify data interchange between
platforms and connectors to automate any application in your lab.

The building blocks of SCL are [`Steps`](#steps), which can be combined
to form [`Phoenixs`](#Phoenixs).

## Steps

A `step` is a unit of work or an action performed on data or in an application.

Each `step` has some number of [parameters](#arguments-and-parameters)
and produces a [result](#results).

A list of all `steps` is available [here](/steps/all)
and each [connector](connectors/core.md) adds its own set of steps.

To define a step in an SCL, write the name of the step
followed by the [arguments](#arguments-and-parameters).

For example to print a string, you use the `Print` step which
has a string parameter called `Value`.

```scl
Print Value: 'Hello World'
```

## Arguments and Parameters

A step has parameters, or values that are expected by the step when you
execute it. Values that are passed to steps are called arguments.

> You can think of a parameter as a parking space and the argument as a car.

In the example below, `Print` is the step, `Value` the parameter name,
and `'Hello World'` is the argument.

```scl
Print Value: 'Hello World'
```

### Parameter Names

Parameter names are usually optional as they can be inferred from the argument order.

```scl
Print 'Hello World'
```

Most steps have more than one parameter.

For example the `CharAtIndex` step has the parameters `String` and `Index`.

```scl
CharAtIndex String: 'Hello' Index: 1 # returns 'e'
```

The step above explicitly names the parameters. Doing this allows
you to pass arguments in any order.

```scl
CharAtIndex Index: 1 String: 'Hello' # also returns 'e'
```

Each step also has an implicit argument ordering that allows it
to infer the names of the parameters from that order.

```scl #ignore
- CharAtIndex 'Hello' 1 # returns 'e'
- CharAtIndex 1 'Hello' # results in an error
```

For `CharAtIndex`, both parameters are **required** so calling
it without providing at least two arguments results in an error.

### Optional Parameters

The `FileRead` step has three parameters:

- `Path` which is **required**
- `Encoding` which is **optional** with the **default** `UTF8`
- `Decompress` which is **optional** with the **default** `false`

So `FileRead` can be called using three arguments:

```scl
FileRead Path: 'C:/data.txt.gz' Encoding: 'ASCII' Decompress: true
```

But the optional parameters can be omitted, and the default
parameter arguments will be used. Default arguments
are specified in the [steps documentation](/steps/FileSystem/FileRead).

These are equivalent:

```scl
FileRead 'C:/data.txt'
```

```scl
FileRead Path:'C:/data.txt'
```

```scl
FileRead Path:'C:/data.txt' Encoding: 'UTF8' Decompress: false
```

You can also mix and match named and inferred arguments as long as the named arguments come last.

```scl
FileRead 'C:/data.txt' Decompress: true
```

```scl #ignore
FileRead 'C:/data.txt' true # results in error because true is not a valid value for the `Encoding` parameter.
```

## Phoenixs

A `Phoenix` is one or more `Steps` that are executed in order.
Steps in a Phoenix are indicated with a `-` on a new line

```scl
- <variable1> = 1
- <variable2> = 1 + <variable1>
- Print <variable2>
```

## Types

All `Step` [parameters](#arguments-and-parameters) and [results](#results) in SCL
have one of the following types:

| Type                  | Description                                         | Example                                                                |
| --------------------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| Unit                  | The result of a step which produces no other output |                                                                        |
| [String](#strings)    | A piece of text.                                    | `'Hello World'` or `"Hello World"`                                     |
| Integer               | An integer                                          | `1` or `-1` or `54876`                                                 |
| Double                | A real number                                       | `1.0` or `2.5` or `-5,48923`                                           |
| Bool                  | A boolean                                           | `true` or `false`                                                      |
| Enum                  | A value from a particular set of possibilities      | `Encoding.UTF8` (note, you can also write `'UTF8'`)                    |
| DateTime              | A date and time                                     | `2021-01-22` or `2021-01-22T01:22:58`                                  |
| [Array](#arrays)      | A list of other objects                             | `[]` or `[1,2,3]` or `[1, 'one', true]` or `[[1,2],['three', 'four']]` |
| [Entity](entities.md) | A structed, nested, piece of data.                  | `(Color:'red', Index:5)`                                               |
| OneOf                 | A discriminated union of other objects              | A step parameter might allow either a `string` or an `int`             |

## Variables

The results of steps can be stored as **variables** which are declared using angle brackets.

```scl
- <name> = 'mark' # assigns the value 'mark' to variable <name>
- Print <name>    # prints the value contained in <name>
```

:::caution
Once a variable is assigned, its type is set and cannot be changed in subsequent assignments.
Therefore the following SCL would not work:
:::

```scl #ignore
- <Var> = 1
- <Var> = 'string' #ERROR Variable 'Var' does not have type 'StringStream'
```

But this works fine:

```scl
- <Var> = 1
- <Var> = 2
```

### The Automatic Variable `<item> or <>`

Inside a [Lambda Function](#lambdas) you can use the automatic variable `<item>`
or its shorthand `<>` to refer to the variable introduced by the function.

```scl
- ForEach
    Array: [(num:1), (num:2), (num:3)]
    Action: (Log <>.num)
```

```scl
- ForEach
    Array: [(num:1), (num:2), (num:3)]
    Action: (Log <item>.num)
```

The `ForEach` step will perform the `Action` on each `entity` in the `Array`.
To access the properties of these entities in the `Action`, you can use the
automatic variable `<item>` or its shorthand `<>`.

## Math Operators

SCL supports the following math operators:

- `+` # Addition
- `-` # Subtraction
- `*` # Multiplication
- `/` # Division
- `%` # Modulo
- `^` # Exponent

These operators can be chained _only_ with operators of the same type.

To prevent ambiguity you must use brackets to separate groups

```scl #ignore
- Print 2 + 3             # Prints 5
- Print 2 + 3 + 4         # Prints 9
- Print 2 + 3 * 4 + 5     # Results in an error
- Print 2 + (3 * 4) + 5   # Prints 19
```

## Style and Layout

SCL is designed to be as user friendly as possible with few brackets
or special characters.

Additional whitespace and newline characters are ignored.
The only exception is the newline character before a new
step in a [Phoenix](#Phoenixs).

The names of [steps](#steps), [parameters](#arguments-and-parameters), and
[variables](#variables) are case-insensitve.

You are encouraged to lay out your Phoenixs in the way that
is most readable to you.

You can also use tools like the
[VSCode Extension](https://marketplace.visualstudio.com/items?itemName=reductech.reductech-scl)
to format your Phoenix automatically.

## Step and Parameter Aliases

For SCL to have a more natural-language style, many of the Steps and
their parameters have aliases. For example,
[`DeleteItem`](/steps/FileSystem/DeleteItem) can be written as:

```scl
- DeleteItem Path: 'c:\temp\file.txt'
- Delete File: 'c:\temp\file.txt'
- Delete Folder: 'c:\temp\folder'
```

These two Phoenixs are the same:

```scl
- FileRead Path: 'data.csv'
| FromCSV
| EntityMap (EntitySetValue <> Property: 'ColumnA' Value: (<>.ColumnA + 1))
| ToJsonArray
| FileWrite Path: 'data.json'

- ReadFromFile 'data.csv'
| ConvertCSVToEntity
| EntityMap (in <> set: 'ColumnA' to: (<>.ColumnA + 1))
| ToJsonArray
| WriteToFile 'data.json'
```

## Results

Every step produces a _result_, which will either be **Success** or **Failure**

**Success** contain an output value that can be used by other steps.

**Failure** results contain an error message that will eventually
be fed back to the user.

The `result` of a step can be used as an [argument](#arguments-and-parameters) to another step.
The step being passed as an argument must be wrapped in brackets.

```scl
Print (FileRead 'C:/data.txt') # prints the text in the file
```

## Pipelining

The [result](#results) of a step can be used as the first argument
of another step by connecting them with `|`, the pipeline operator.

Pipelining can only be used for the first ordered argument to a step.

```scl
(FileRead 'C:/data.txt') | Print # prints the text in the file.
```

This is equivalent to

```scl
Print (FileRead 'C:/data.txt')
```

## Comments

There are two ways to comment in SCL:

```sql
# This is a single line comment

/*
This
is
a
multi-line
comment
*/
```

## Strings

There are three ways to define strings

```scl
'Single-quoted strings
can be multiline
must escape single quotes by repeating ('')'
```

```scl
"Double Quoted strings must be single-line, escape \" \r \n \t"
```

```scl
"""
Three double quotes start
A multiline string with no
"Escaping" needed
"""
```

## String Interpolation

If you prefix a Double Quoted string with `$`, you can use braces to
interpolate the results of steps.

```scl
- <var> = $"A{2 + 2}"   # A4
```

## Arrays

You can define arrays or lists with square brackets.

```scl
- <MyArray> = [1,2,3]
- <MyArray> = [1 2 3] # Commas are optional
```

An array can store any [type](#types).

```scl
- <MyEntityArray> = [
    (Property1: 'Value1' Property2: 2)
    (Property1: 'Value3' Property2: 4)
  ]
```

All array elements must have the same [type](#types).

```scl
<MyArray> = [1,'two',3] # Results in an error
```

There are several steps that operate on arrays.

```scl
ArrayLength [1,2,3] # returns 3
```

```scl
ArrayDistinct [1,1,2,2,3] # returns [1,2,3]
```

```scl
ArraySort [2,3,1] # returns [1,2,3]
```

```scl
ArrayTake [1,2,3,4,5] 3 # returns [1,2,3]
```

```scl
ArraySkip [1,2,3,4,5] 3 # returns [4,5]
```

You can access individual elements in an array with square brackets

```scl
- <MyArray> = ['a','b','c']
- Print (<MyArray>[0]) # 'a'
```

## Lambdas

Some functions which operate on Arrays take lambda functions as parameters.
For example the `ForEach` function takes a function which determines what to do with each array element.

```scl
ForEach
  Array: [(num:1), (num:2), (num:3)]
  Action: (<var> => Log <var>.num)
```

The variable name and the arrow in the lambda function are optional.
You can use the [Automatic Variable](#the-automatic-variable-item-or-) or `<item>` to access the variable value.

```scl
ForEach
  Array: [(num:1), (num:2), (num:3)]
  Action: (Log <>.num)
```

```scl
ForEach
  Array: [(num:1), (num:2), (num:3)]
  Action: (Log <item>.num)
```

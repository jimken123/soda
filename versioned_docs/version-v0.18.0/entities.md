---
title: Entities, the Data Type for Data Exchange
sidebar_label: Entities
description: Used to store/represent data in Sequence, entities are the intermediary format for sharing data between forensic and ediscovery applications in automated workflows.
---

# Entities

An entity is a collection of property-value or key-value pairs.
Entities are used to store/represent data in Sequence.

Entities are defined in SCL using round brackets:

```scl
(Property: 'Value')
```

Entities can have any number of properties

```scl
(Property: 'Value' Key: 'AnotherValue' NumberProperty: 123)
```

You can quote property names to include spaces and other characters:

```scl
('My Property': 123)
```

Entity values can have any [type](sequence-configuration-language.md#types), including arrays and entities.

```scl
(
  Name: 'Foo'
  Letters: ['F','o','o']
  Friend: (
    Name: 'Bar'
    Letters: ['B','a','r']
  )
)
```

# Getting values

To get a property value from an entity use the `EntityGetValue` step.

```scl
- <entity> = (Foo: 'a' Bar: 'b')
- EntityGetValue <entity> 'Foo'

# returns: 'a'
```

A shorthand for `EntityGetValue` is a period / full stop:

```scl
- <entity> = (Foo: 'a' Bar: 'b')
- <entity>.Foo # returns: 'a'

- 5 * (Number: 5).Number # returns: 25
```

To retrieve nested entities, use multiple periods:

```scl
- <entity> = (Foo: (Bar: 'a'))
- <entity>.Foo.Bar # returns: 'a'
```

For properties with spaces or other unusual characters use `EntityGetValue`.

```scl
- <entity> = ('multi word property name': 'a')
- EntityGetValue <entity> 'multi word property name' # returns: 'a'
```

It's also possible to get property values using the square bracket notation:

```scl
- <entity> = ('foo': 'a')
- <entity>['foo'] # returns: 'a'
```

This is a legacy feature and may be deprecated at some time in the future.

# Nested properties

You can use periods in property names to nest properties:

```scl
# The following are all equivalent
- <entity1> = (a: (b: (c: 123)))
- <entity2> = (a.b.c: 123)
- <entity3> = ('a'.'b'.'c': 123)
- <entity4> = (a.'b'.c: 123)
```

You can also retrieve nested property values using the same notation:

```scl
- <entity> = (a: (b: (c: 123)))
- EntityGetValue <entity> 'a.b.c' # returns: 123
```

# Combining Properties

You can combine entities with the `+` operator.

Nested entities will be combined. For all other properties, the value
of the entity on the right will be used.

```scl #ignore
- (Foo: 'a')               + (Bar: 'b')      # (Foo: 'a' Bar: 'b')
- (Foo: 'a' Bar: 'b')      + (Bar: 'c')      # (Foo: 'a' Bar: 'c')
- (x: (Foo: 'a'))          + (x: (Bar: 'b')) # (x:(Foo: 'a' Bar: 'b'))
- (x: (Foo: 'a' Bar: 'b')) + (x: (Bar: 'c')) # (x:(Foo: 'a' Bar: 'c'))
```

# Entity Arrays

A primary use case of SCL is handling sequential collections (lists or streams) of entities.

It is easy to read and write different formats like CSV, Concordance, and JSON.

There are also steps for filtering, mapping, sorting, and distincting entities.
See [steps prefixed with `Entity`](/steps/Core/EntityCombine) for more details.

```scl
FileRead 'artwork_data.csv'
| FromCSV # Convert CSV into a stream of entities
| Filter (<>.artist == 'Blake, Robert') # Filter the stream
# Change the artist's name to uppercase:
| EntityMap (in <> set: 'artist' to: (StringToCase (from <> 'artist') TextCase.Upper))
# Rename properties from 'artist' to 'Artist Name' and 'artistId' to 'Artist Id':
| EntityMapProperties (artist: 'Artist Name' artistId: 'Artist Id')
| Sort (<>.year) # sort by year
| Distinct (<>.id) # remove duplicate entries using the 'id' as the key
| ToJsonArray # convert the entity stream to JSON
| FileWrite 'artwork_data.json'
```

Some steps require a function argument which will be called on every element of the array.
For example the `Filter` function filters an array to only elements which meet a
particular condition and that condition must be provided as an argument.

The function you provide can access the member of the array which is being evaluated
in three ways, all of which are equivalent:

```scl
- <elements> = FileRead 'artwork_data.csv'| FromCSV # Convert CSV into a stream of entities
- <elements> | Filter (<item>.artist == 'Blake, Robert') | Log # Use the variable named <item>>
- <elements> | Filter (<myvariable> => <myvariable>.artist == 'Blake, Robert') | Log # Use a different variable name
- <elements> | Filter (<>.artist == 'Blake, Robert') | Log # Use the automatic variable <>
```

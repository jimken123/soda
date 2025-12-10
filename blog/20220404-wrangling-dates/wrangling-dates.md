---
title: Wrangling Dates with SCL
description: Use the Sequence Configuration Language to easily combine and convert dates when working with structured data formats.
slug: wrangling-dates-with-scl
date: 2022/04/04
authors:
  - name: Mark Wainwright
    title: Sequence Maintainer
    url: https://github.com/wainwrightmark
    image_url: https://avatars.githubusercontent.com/u/5428904?s=400&u=272a94528302c122cfe8964069c86b65dd406645&v=4
tags: [sequence, scl, examples, dates, structured data, transform, schemas]
---

# Wrangling Dates with SCL

You have a structured data file you need to process.
I'll use CSV here but it could be any data format that SCL supports.
It has all the information you need but the date fields are spread
out across multiple columns and several different date formats are used.

In this blog post I'll show how to use SCL to combine all the date
fields into one and how to handle multiple formats

<!--truncate-->

## Sample Data

The following is the CSV file I'll be using in this example.

```text
"Date","Time","TimeZone","Location"
"January, 01 2000","01:23:45","+00:00","UK"
"December, 31 1999","15:23:45","-10:00","Hawaii"
"January, 01 2000","02:23:45","+01:00","France"
"January, 01 2000","06:53:45","+05:30","India"
"01/01/2000","01:23:45","+00:00","Iceland"
"31/12/1999","15:23:45","-10:00","Hawaii"
"01/01/2000","02:23:45","+01:00","Germany"
"01/01/2000","06:53:45","+05:30","Sri Lanka"
```

It has the same date and time written in eight different ways with two different
time formats and four different timezones.

As an additional headache, the Date, Time, and Timezone data is spread across
three different fields.

Download the example file [here](./dates-example.csv). Or just copy the example above.

## Reading the Data

To read the data, make sure you have the [File System](/docs/connectors/filesystem)
and [Structured Data](/docs/connectors/structureddata) connectors configured,
then run:

```scl
- <data> = FileRead 'dates-example.csv' | FromCSV
```

This reads the contents of the file and pipes the resulting stream into the `FromCSV` step
which converts it into [entities](/docs/entities).

The rest of this process works with any data source, not just CSV.

## Combining the Date Fields

To parse the dates correctly, we need to combine the three fields.
We can use `ArrayMap` to add another field which is the concatenation of all three.

```scl
- <newdata> = <data>
| ArrayMap (In <> Set: 'FullDate' To: $"{<>['Time']} {<>['Date']} {<>['TimeZone']}")
```

Here we use `ArrayMap` which maps every entity in our array (`FromCSV` produces
an Array of Entities) to a new value.

Here the new value is the same entity but with an additional 'FullDate' field added
which is the values of the three other fields concatenated together using an
[interpolated string](/steps/Core/StringInterpolate).

## The Schema

In order to convert this date string to an actual date we need to create a
[schema](/docs/schemas) to tell the `Transform` step what the
data is supposed to look like.

```scl
- <schema> = (
    'type': 'object'
    'additionalProperties': false
    'properties': (
      'Location': ('type': 'string')
      'FullDate': ('type': 'string', 'format': 'date-time')
    )
    'required': ['FullDate', 'Location']
  )
```

To explain the schema:

- `'type': 'object'` tells the `Transform` step to expect an entity.
- `'additionalProperties': False` will remove all the properties which are not listed in
  the schema. This is how we get rid of the now redundant 'Date', 'Time', and 'TimeZone' fields.
- `'properties':` is the list of properties to expect and their types.
- `'Location': ('type': 'string')` the location field is just a plain string.
- `'FullDate': ('type': 'string', 'format':'date-time')` The date field is also a string but the
  `'format':'date-time'` tells the `Transform` step to convert it into a DateTime.
- `'required': ['Date', 'Location' ]` tells the `Transform` step to give an error or warning
  if any of these fields are missing

## The Date Formats

```scl
- <dateFormats> = ['HH:mm:ss MMMM, dd yyyy zzz', 'HH:mm:ss dd/MM/yyyy zzz']
```

For the `Transform` step to correctly parse the dates, we need to tell it what date formats to expect.
In this case we give it an array with the two different formats present in the data.
It will try the first one first, then the second, and if that is unsucessful it will give you an error message.

If we had just one date format we could give just that string rather than an array with one element.

If we had several full date columns with a different format per column we could give an entity
mapping column names to formats but that is not required in this case.

SCL is run inside C# and uses the C# Date parsing features and format specifiers.
See [this document](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
which explains how those work and how to use them but briefly:

- `HH:mm:ss` means hours, minutes, and seconds separated by colons
- `MMMM` is the full word name for the month while 'MM' is the two digit representation
- `dd` and `yyyy` are day number and year respectively
- `zzz` is the timezone hours and minutes offset from UTC. The timezone specifiers can
  be quite fiddly and you may have to use multiple formats to get it right (e.g. if the
  timezone is omitted or just '0' for UTC but another format everywhere else)

## The Transform Step

Now that we have our data, our schema, and our date formats we can run the `Transform` step.

```scl
<result> = <newdata> | Transform Schema: <schema> DateInputFormats: <dateFormats>
```

The `Transform` step has a lot of optional arguments but apart from `DateInputFormats` the
defaults are good enough for us in this case.

We could have set

- `ErrorBehavior` to control what happens if a transformation is not possible. By default you
  get an error but you could get a warning or ignore it entirely. This also lets you control
  whether or not to output the entity which caused the error.
- `ArrayDelimiters` lets you specify which characters can be array delimiters. This way you
  could transform strings like 'alpha|beta|gamma' into arrays.
- `BooleanTrueFormats`, `BooleanFalseFormats`, and `NullFormats` allow you to specify which
  strings can be converted to `True`, `False`, and `Null` respectively. As with the
  `DateInputFormats` you can do this on a column by column basis if needed.
- `CaseSensitive` allows you to specify whether or not the above formats are case sensitive.
  This is false by default.
- `RoundingPrecision` lets you control how close a floating point number needs to be to an
  integer to be rounded to it.

## Exporting the Results

We can output the data also as a CSV, but this time with tabs as the separator.

```scl
<result> | ToCSV DateTimeFormat: 'yyyy-MM-dd HH:mm:ss' Delimiter: "\t"
```

`DateTimeFormat` lets us specify how the `DateTime` is formatted in the output.

:::caution
The delimiter `\t` _must_ be in double quotes. Single quotes are interpreted as a literal string.
:::

## Final Output

In the final output we see that all dates are now the same, which is correct:

```csv
Location    FullDate
UK    01:23:45 2000-01-01
Hawaii    01:23:45 2000-01-01
France    01:23:45 2000-01-01
India    01:23:45 2000-01-01
Iceland    01:23:45 2000-01-01
Hawaii    01:23:45 2000-01-01
Germany    01:23:45 2000-01-01
Sri Lanka    01:23:45 2000-01-01
```

## Final SCL

```scl
- <schema> = (
    'type': 'object'
    'additionalProperties': false
    'properties': (
      'Location': ('type': 'string')
      'FullDate': ('type': 'string', 'format': 'date-time')
    )
    'required': ['FullDate', 'Location']
  )

- <dateFormats> = ['HH:mm:ss MMMM, dd yyyy zzz', 'HH:mm:ss dd/MM/yyyy zzz']

- <data>
| FromCSV
| ArrayMap (In <> Set: 'FullDate' To: $"{<>['Time']} {<>['Date']} {<>['TimeZone']}" )
| Transform Schema: <schema> DateInputFormats: <dateFormats>
| ToCSV DateTimeFormat: 'yyyy-MM-dd HH:mm:ss' Delimiter: "\t"
```

## Try on the Playground

You can try this SCL on the [playground](/playground), just copy, paste, and run.

```scl
- <data> = """
"Date","Time","TimeZone","Location"
"January, 01 2000","01:23:45","+00:00","UK"
"December, 31 1999","15:23:45","-10:00","Hawaii"
"January, 01 2000","02:23:45","+01:00","France"
"January, 01 2000","06:53:45","+05:30","India"
"01/01/2000","01:23:45","+00:00","Iceland"
"31/12/1999","15:23:45","-10:00","Hawaii"
"01/01/2000","02:23:45","+01:00","Germany"
"01/01/2000","06:53:45","+05:30","Sri Lanka"
"""

- <schema> = (
    'type': 'object'
    'additionalProperties': false
    'properties': (
      'Location': ('type': 'string')
      'FullDate': ('type': 'string', 'format': 'date-time')
    )
    'required': ['FullDate', 'Location']
  )

- <dateFormats> = ['HH:mm:ss MMMM, dd yyyy zzz', 'HH:mm:ss dd/MM/yyyy zzz']

- <data>
| FromCSV
| ArrayMap (In <> Set: 'FullDate' To: $"{<>['Time']} {<>['Date']} {<>['TimeZone']}" )
| Transform Schema: <schema> DateInputFormats: <dateFormats>
| ToCSV DateTimeFormat: 'yyyy-MM-dd HH:mm:ss' Delimiter: "\t"
| Print
```

---
title: How to Use Schemas to Transform Dates | Schema Examples
sidebar_label: Using Schemas to Transform Dates
---

# Using Schemas to Transform Dates

This example shows how to deal with entities with potentially difficult or inconsistent date fields.

The [example data](pathname:///example-files/schema/dates-example.csv) contains eight rows, each with the same date encoded a different way. There are also two different date formats used.

```csv
Date    Time    TimeZone    Location
January, 01 2000    01:23:45    +00:00    UK
December, 31 1999    15:23:45    -10:00    Hawaii
January, 01 2000    02:23:45    +01:00    France
January, 01 2000    06:53:45    +05:30    India
01/01/2000    01:23:45    +00:00    Iceland
31/12/1999    15:23:45    -10:00    Hawaii
01/01/2000    02:23:45    +01:00    Germany
01/01/2000    06:53:45    +05:30    Sri Lanka
```

You can use a Phoenix with a `Transform` step to output the data with the dates all in one field.

```scl
- <schema> = (
  'type': 'object'
  'additionalProperties': False
  'properties': ('FullDate': ('type': 'string', 'format':'date-time') 'Location': ('type': 'string') )
  'required': ['Date', 'Location' ])

- <dateFormats> = ['hh:mm:ss MMMM, dd yyyy zzz', 'hh:mm:ss MM/dd/yyyy zzz']

- fileread 'dates-example.csv'
| FromCSV Delimiter: "\t"
| Arraymap (In <> Set: 'FullDate' To: $"{<>['Time']} {<>['Date']} {<>['TimeZone']}" )
| Transform <schema> DateInputFormats: <dateFormats>
| ToCSV DateTimeFormat: 'hh:mm:ss yyyy-MM-dd'
```

This Phoenix does three main things

- It uses `ArrayMap` to set the TimeZone field to the concatenation of the original three Time, Date, and TimeZone fields

- It uses `Transform` to convert the TimeZone field to a date and remove the non-required fields.

- Note the two date formats supplied to the `Transform` step. [This document](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) explains how to define your own.

- It outputs the data with a different `DateTimeFormat`

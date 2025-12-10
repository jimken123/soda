---
title: Working with CSV Files | Structured Data Connector Examples
sidebar_label: Working with CSV Files
description: Learn how to use Phoenix to work with CSV files when automating forensic and ediscovery workflows.
---

# Working with CSV Files

[Instructions on how to install and setup Phoenix.](structureddata.md)

More details on:

- [Entities](../../../entities.md)
- [Entity Steps](/steps/Core/EntityCombine)

## Write Entity Array to CSV

```scl
- <FileName> = 'selected-artworks.csv'
- [
    (Artist: "Blake, Robert" ArtistId: "38" Name: "Six Drawings of Figures with Outstretched Arms" Date: "date not known"),
    (Artist: "Calvert, Edward" ArtistId: "81" Name: "Ideal Pastoral Life" Date: "1829"),
    (Artist: "Sterne, Hedda" ArtistId: "16798" Name: "NY, NY No. X" Date: 1948)
  ]
| ToCSV
| FileWrite <FileName>
```

## Filter, Transform and Export CSV to JSON

This example does the following things:

- Reads a CSV file containing data about artists

The `artwork_data.csv` file can be downloaded using the
[PowerShell - Download CSV](../powershell/download-csv.md) example or
from [here](https://github.com/tategallery/collection/blob/master/artwork_data.csv).

- Filter out all artworks that are not by Robert Blake
- Uppercase the value of the 'artist' property
- Rename 'artist' to 'Artist Name' and 'artistId' to 'ArtistId'
- Sort by the 'year' property
- Distinct by the 'id' property
- Convert to JSON
- Write to a new file

```scl
- FileRead 'artwork_data.csv'
| FromCSV
| ArrayFilter ((from <> 'artist') == 'Blake, Robert')
| EntityMap (in <> set: 'artist' to: (StringToCase (from <> 'artist') TextCase.Upper))
| EntityMapProperties (artist: 'Artist Name' artistId: 'ArtistId')
| ArraySort (from <> 'year')
| ArrayDistinct (from <> 'id')
| ToJsonArray
| FileWrite 'artwork_data_filtered.json'
```

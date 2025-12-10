---
title: Search and Tag Items | Nuix Connector Examples
sidebar_label: Search and Tag Items
---

# Search and Tag Items

This example will run a number of searches and tag the responsive
items and their descendants. It works with any existing case.

## Setup

[Instructions on how to install and setup Phoenix and the Nuix Connector.](nuix.md)

## SCL

Download the SCL here: [nuix-search-and-tag.scl](pathname:///example-files/nuix/nuix-search-and-tag.scl)

To run:

```powershell
PS > ./Phoenix.exe run nuix-search-and-tag.scl
```

```scl
################################################################################

- <CasePath> = './ingest-filter'

- <SearchAndTag> = [
    (Search: '*.jpg' Tag: 'image')
    (Search: '*.doc' Tag: 'document')
    (Search: 'red'   Tag: 'colour')
  ]

################################################################################

# Open a nuix case
- NuixOpenCase <CasePath>

# For each item in the SearchAndTag list, run the 'Search' against the case,
# and tag all items and their descendants with 'Tag'
- ForEach <SearchAndTag> (
    NuixSearchAndTag
      Search: <>['Search']
      Tag: <>['Tag']
      SearchType: SearchType.ItemsAndDescendants
  )

################################################################################
```

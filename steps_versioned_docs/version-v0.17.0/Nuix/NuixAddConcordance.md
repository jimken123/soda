---
title: NuixAddConcordance Step | Nuix Connector Documentation
sidebar_label: NuixAddConcordance
description: Adds data from a Concordance file to a NUIX case.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixAddConcordance
_Alias_:`NuixAddConcordance`, `NuixImportConcordance`

_Output_:`Unit`

*Requires Nuix.Version 7.6*

*Requires Nuix.Features: CASE_CREATION, METADATA_IMPORT*

Adds data from a Concordance file to a NUIX case.


|Parameter                                   |Type    |Required|Position|Default Value                                            |Example             |Requirements|Summary                                                                                                                                                                                      |
|:-------------------------------------------|:------:|:------:|:------:|:-------------------------------------------------------:|:------------------:|:----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|FilePath<br/>_ConcordanceFile_              |`string`|✔       |1       |                                                         |C:/MyConcordance.dat|            |The path of the concordance file to import.                                                                                                                                                  |
|Container<br/>_ToContainer_<br/>_FolderName_|`string`|✔       |2       |                                                         |                    |            |The name of the evidence container to add the concordance file to.                                                                                                                           |
|ConcordanceProfileName                      |`string`|✔       |3       |                                                         |MyProfile           |            |The name of the concordance profile to use.                                                                                                                                                  |
|CasePath<br/>_Directory_                    |`string`|        |        |Use the current open case                                |C:/Cases/MyCase     |            |The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
|ConcordanceDateFormat<br/>_DateFormat_      |`string`|        |        |yyyy-MM-dd'T'HH:mm:ss.SSSZ                               |                    |            |The concordance date format to use.                                                                                                                                                          |
|ContainerEncoding<br/>_Encoding_            |`string`|        |        |Default system encoding                                  |UTF-8               |            |Set the encoding for the evidence container.                                                                                                                                                 |
|ContainerLocale<br/>_Locale_                |`string`|        |        |Default system locale                                    |en-GB               |Version 7.2 |Set the locale for the evidence container.                                                                                                                                                   |
|ContainerTimeZone<br/>_TimeZone_            |`string`|        |        |Default system time zone                                 |UTC                 |            |Set the time zone for the evidence container. If the time zone given is not known to Nuix, the GMT time zone will be used.                                                                   |
|Custodian<br/>_ContainerCustodian_          |`string`|        |        |No custodian assigned                                    |                    |            |The custodian to assign to the new evidence container.                                                                                                                                       |
|CustomMetadata                              |`entity`|        |        |No custom metadata will be added                         |                    |            |Sets additional metadata on the evidence container.                                                                                                                                          |
|Description<br/>_ContainerDescription_      |`string`|        |        |No Description                                           |                    |            |The description of the evidence container.                                                                                                                                                   |
|OpticonPath<br/>_OpticonFile_               |`string`|        |        |No opticon file will be processed                        |                    |            |Path to the opticon file                                                                                                                                                                     |
|ProcessingSettings<br/>_Settings_           |`entity`|        |        |(create_thumbnails: false, additional_digests: ['SHA-1'])|                    |            |Sets the processing settings to use. These settings correspond to the same settings in the desktop application, however the user's preferences are not used to derive the defaults.          |
|ProgressInterval                            |`int`   |        |        |Every 5000 items                                         |                    |            |The number of items at which the Nuix processor logs a progress message.                                                                                                                     |
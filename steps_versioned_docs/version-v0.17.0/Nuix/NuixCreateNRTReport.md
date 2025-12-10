---
title: NuixCreateNRTReport Step | Nuix Connector Documentation
sidebar_label: NuixCreateNRTReport
description: Create a case report using an NRT file.. Use this step to easily automate forensic and e-discovery workflows using Sequence.
tags: [Step, Nuix]
hide_title: true
hide_table_of_contents: true
---

# NuixCreateNRTReport
_Alias_:`NuixCreateNRTReport`

_Output_:`Unit`

*Requires Nuix.Version 7.4*

*Requires Nuix.Features: ANALYSIS*

Create a case report using an NRT file.


|Parameter                                                              |Type    |Required|Position|Default Value                                           |Example                                    |Summary                                                                                                                                                                                      |
|:----------------------------------------------------------------------|:------:|:------:|:------:|:------------------------------------------------------:|:-----------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|NRTPath<br/>_Template_                                                 |`string`|✔       |1       |                                                        |                                           |The NRT file path.                                                                                                                                                                           |
|OutputPath<br/>_ReportPath_                                            |`string`|✔       |2       |                                                        |C:/Temp/report.pdf                         |The output path.                                                                                                                                                                             |
|OutputFormat<br/>_Format_                                              |`string`|        |3       |PDF                                                     |                                           |The format of the report file that will be created.                                                                                                                                          |
|ApplicationName<br/>_NuixAppName_<br/>_NUIX_APP_NAME_                  |`string`|        |        |Nuix                                                    |                                           |The application name generating the report.                                                                                                                                                  |
|CasePath<br/>_Directory_                                               |`string`|        |        |Use the current open case                               |C:/Cases/MyCase                            |The case path to use. If this is set, that case will be opened. If it is not set, the existing case will be used. If it is not set and no existing case is open this will result in an error.|
|GlobalResourcesPath<br/>_GlobalResourcesUrl_<br/>_GLOBAL_RESOURCES_URL_|`string`|        |        |No global resource path set                             |                                           |The path to the global resources folder. Must have a trailing '\\'.                                                                                                                          |
|LocalResourcesPath<br/>_LocalResourcesUrl_<br/>_LOCAL_RESOURCES_URL_   |`string`|        |        |NRTPath with extension removed and \\resources appended.|C:\\ProgramData\\Nuix\\Reports\\Resources\\|The path to the local resources folder. Must have a trailing '\\'. The resources folder can be obtained by unzipping the NRT file.                                                           |
|Title<br/>_ReportTitle_<br/>_NUIX_REPORT_TITLE_                        |`string`|        |        |&lt;Case Name&gt; Report                                |                                           |The report title.                                                                                                                                                                            |
|User<br/>_NuixUser_<br/>_NUIX_USER_                                    |`string`|        |        |The case investigator property.                         |                                           |The report user.                                                                                                                                                                             |
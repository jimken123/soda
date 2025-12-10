---
title: Application Settings Examples
sidebar_label: Application Settings
---

# Application Settings

Phoenix is configured using the `appsettings.json` file which can be found
in the `lib` directory.

| File                                                                                                | Description                                                                                                      |
| :-------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| [appsettings-default.json](pathname:///example-files/application-settings/appsettings-default.json) | The default configuration file that comes with Phoenix. Logs to Console (`Info`) and File (`Debug`)             |
| [appsettings-docgen.json](pathname:///example-files/application-settings/appsettings-docgen.json)   | Minimal configuration that only outputs warnings and errors to the console. It's used to generate documentation. |
| [appsettings-full.json](pathname:///example-files/application-settings/appsettings-full.json)       | Full configuration that includes four logging targets: Console, File, JSON file, and Elastic Search.             |

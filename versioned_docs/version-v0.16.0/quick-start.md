# Quick Start

1. Download the latest release [here](/download)
2. Unzip the archive and open a shell (cmd, pwsh, powershell) of your choice in that directory
3. Run `.\Phoenix.exe run scl "Print 'Hello world'"`

## Running SCL

To run a Phoenix from a file:

```powershell
PS > .\Phoenix.exe run .\Phoenix.scl
```

From the command line:

```powershell
PS > .\Phoenix.exe run scl "- <version> = GetApplicationVersion `n- Print <version>"
```

## Help

To display the available commands and parameters when running Phoenix, use the
`--help` or `-h` argument:

```powershell
PS > .\Phoenix.exe --help
```

To see a list of all the `Steps` available, use the `steps` command:

```powershell
PS > .\Phoenix.exe steps

# To filter by name or connector, add a filter as the first argument
PS > .\Phoenix.exe steps file
```

## Connectors

Phoenix uses a connector system to extend functionality to various applications.

By default, Phoenix comes with the [`FileSystem`](connectors/filesystem.md) and
[`StructuredData`](connectors/structureddata.md) connectors.
All the available connectors can be seen in the
[Connector Registry](https://gitlab.com/Phoenix/connector-registry/-/packages).

To manage connectors, use the `connector` command:

```powershell
PS > .\Phoenix.exe connector

# To list the connectors currently installed, use list
PS > .\Phoenix.exe connector list

# To list all the connectors available in the registry, use find
PS > .\Phoenix.exe connector find

# To install a connector, use add
PS > .\Phoenix.exe connector add Phoenix.Connectors.Sql

# To update an installed connector
PS > .\Phoenix.exe connector update Phoenix.Connectors.Sql

# To remove an installed connector
PS > .\Phoenix.exe connector remove Phoenix.Connectors.Sql
```

## Some Examples to Try

Convert JSON To CSV

```scl
FileRead 'C:/data.json'
| FromJsonArray
| ToCSV
| FileWrite 'C:/data.csv'
```

Remove duplicates from CSV

```scl
FileRead 'C:/data.csv'
| FromCSV
| ArrayDistinct
| ToCSV
| FileWrite 'C:/data-distinct.csv'
```

Remove rows with duplicate Ids from CSV

```scl
FileRead 'C:/data.csv'
| FromCSV
| ArrayDistinct (From <> 'Id')
| ToCSV
| FileWrite 'C:/data-distinct.csv'
```

## VS Code

A [Visual Studio Code](https://code.visualstudio.com/) extension for
SCL is now available for download from the
[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=reductech.reductech-scl).

To install in VS Code:

1. Open the Extensions sidebar (`Ctrl + Shift + X`)
2. Search for SCL
3. Click on SCL and select Install

The extension currently supports:

- Syntax highlighting
- Hover help
- Code completion for step names and parameters
- Error Diagnostics
- Formatting

### Run SCL from VS Code

To run SCL in VS Code:

1. Open a `.scl` file
2. Use the `SCL: Run Phoenix` command

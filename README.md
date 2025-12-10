# Phoenix® Documentation

Built using [Docusaurus](https://docusaurus.io).

## Running Docusaurus locally

```powershell
npm run start
```

## Building Steps Documentation

Update the `Phoenix` submodule to the latest version.

```powershell
git -C ./steps-gen/Phoenix fetch
git -C ./steps-gen/Phoenix checkout <VERSION>
```

Build Phoenix console:

```powershell
dotnet publish -c Release -o ./.Phoenix steps-gen/Phoenix/Phoenix/Phoenix.csproj
cp ./steps-gen/Phoenix-appsettings.json ./.Phoenix/appsettings.json
cp ./steps-gen/connectors.json ./.Phoenix/connectors.json
```

Run the doc generation SCL:

```powershell
./.Phoenix/Phoenix run ./steps-gen/build-docs.scl
```

## Validating Documentation SCL

Build `Phoenix console` first. Then run the `Validate-SCL` script which
will validate all `scl` code blocks in `.md` files in the `./docs` directory.

```powershell
./Validate-SCL.ps1
```

It's also possible to specify a file or directory to validate:

```powershell
./Validate-SCL.ps1 -Path ./docs/entities.md
```

To ignore a code block, add a ` #ignore` right after scl:

````md
```scl #ignore
(prop: 1)
```
````

## Adding New Connectors to the Documentation

1. Add the connector to the configuration in `steps-gen/connectors.json`.
   This will enable step documentation to be generated for this connector.
2. Add connector description and settings to `docs/connectors/`
3. Add any connector examples to `docs/examples`
4. Add connector description and name to `steps-gen/build-docs.scl`.

## Updating Documentation for New Releases

All the documentation that is in the `docs` and `steps` folders
is published as the `-alpha` version. For release version, a
snapshot needs to be created:

1. Remove previous version of Phoenix console (if exists) and steps

   ```powershell
   rm -rec -for ./.Phoenix
   rm -rec -for ./steps/*
   ```

2. Update the `scl-editor` ref for the `build:docusaurus` job in `.gitlab-ci.yml`
3. Update the connector versions in `./steps-gen/connectors.json`
4. [Delete any versions](https://docusaurus.io/docs/versioning#deleting-an-existing-version) older than six months.
5. [Build the steps documentation](#building-steps-documentation)
6. Create a new version snapshot for docs and steps (same version for both):

   ```powershell
   npm run docusaurus docs:version v0.18.0
   npm run docusaurus docs:version:steps v0.18.0
   ```

7. Verify that the new versions work

   ```powershell
   npm run start
   ```

8. After pushing to GitLab, verify that the playground works.

## Building SCL Playground for Local Development

This is done automatically in the CI, but if developing locally:

Clone the [scl-editor](https://gitlab.com/Phoenix/scl-editor) project
into the same directory as `Phoenix-docs`.

```powershell
Remove-Item -rec -for ./playground -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path ./playground | Out-Null
dotnet publish --configuration Release --output ./scl-playground ../scl-editor/SCLEditor.React/SCLEditor.React.csproj
Move-Item ./scl-playground/wwwroot/* ./playground
Move-Item ./playground/index.html ./playground/playground-react.html
Remove-Item -rec -for ./scl-playground
```

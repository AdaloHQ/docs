---
id: install-scripts
title: Install Scripts
---

:::note
This section is totally optional, and is only necessary if you need to edit the mobile builds directly.
:::

In some cases, you may want to edit the mobile build whenever your component is installed. For example, the audio player component needs to add a setting under an iOS build's info.plist to enable background audio.

The way you can edit builds in Adalo is by using **install scripts**. In the `adalo.json` or in the `package.json` under the `adalo` property, you can add install scripts for iOS and Android like so:

```json {12,13}
{
  ...
  "adalo": {
    "displayName": "Example Library",
    "components": [
      {
        "name": "ExampleComponent",
        "manifest": "./components/ExampleComponent/manifest.json"
      }
    ],
    "logo": "./logo.png",
    "iosInstallScript": "./relativePath/to/script/here.ts",
    "androidInstallScript": "./relativePath/to/script/here.ts",
  }
}
```

These scripts can be written in either javascript or typescript, and are run with the `deno` typescript runtime: https://deno.com/

We run these scripts with read and write permissions to the mobile build project path, and some environment variables and run commands allowed:

```
deno run \
  --allow-read=/Users/enzo/Desktop/rwa-ios-maps \
  --allow-write=/Users/enzo/Desktop/rwa-ios-maps \
  --allow-env="ADALO_APP_PROJECT_PATH,ADALO_APP_PROJECT_NAME,ADALO_APP_PLATFORM" \
  --allow-run=plutil,/usr/libexec/PlistBuddy \
  scripts/installIos.ts
```

You can use these variables to get different paths:

```bash
project_path=$(pwd)   # Path to the mobile build

dir=$(dirname "${0}") # Directory of the install script. You can use this to call
                      # other scripts in the same directory
```

You can also get a few variables through environment variables:

```bash
name=$PROJECT_NAME    # Name of the project (Can be used on iOS to get to
                      # certain directories)

bundleId=$BUNDLE_ID   # The bundle id is passed as an environment variable too.
                      # Used on Android instead of project name.
```

That should be everything you need to modify the build directly.

:::important
Make sure to make your script executable, for example: `chmod +x ./scripts/ios.sh`. The permissions you place on your script will be what the build process uses.
:::

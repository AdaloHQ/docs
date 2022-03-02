---
id: install-scripts
title: Install Scripts
---

:::important
This section is totally optional, and is only necessary if you need to edit the mobile builds directly.
:::

In some cases, you may want to edit the mobile build whenever your component is installed. For example, the audio player component needs to add a setting under an iOS build's info.plist to enable background audio.

The way you can edit builds in Adalo is by using **install scripts**. In the `package.json` under the `adalo` property, you can add install scripts for iOS and Android like so:

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
    "iosInstallScript": "./relativePath/to/script/here",
    "androidInstallScript": "./relativePath/to/script/here",
  }
}
```

These scripts can be written in either bash or node, and have direct access to the mobile build.

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

:::note
Make sure to make your script executable, for example: `chmod +x ./scripts/ios.sh`. The permissions you place on your script will be what the build process uses.
:::

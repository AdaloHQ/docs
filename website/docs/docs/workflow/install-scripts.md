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

These scripts can be written in either javascript or typescript, and are run with the `Deno` typescript runtime: https://deno.com/

We run these scripts with read and write permissions to the mobile build project path, and some environment variables and run commands allowed:

```bash
deno run \
  --allow-read=/path/to/your/app/project \
  --allow-write=/path/to/your/app/project \
  --allow-env="ADALO_APP_PROJECT_PATH,ADALO_APP_PROJECT_NAME,ADALO_APP_PLATFORM,ADALO_APP_BUNDLE_ID" \
  --allow-run=plutil,/usr/libexec/PlistBuddy \
  scripts/installIos.ts
```

You can access the environment variables from the install scripts with `Deno.env.getEnv` :

```typescript

const projectPath = Deno.env.get('ADALO_APP_PROJECT_PATH') // The path of the mobile build project

const projectName = Deno.env.get('ADALO_APP_PROJECT_NAME')  // The name of the project, it can be used in iOS to access certain directories

const bundleId = Deno.env.get('ADALO_APP_BUNDLE_ID') // The bundle id is passed too, used in android instead of the project name

const platform = Deno.env.get('ADALO_APP_PLATFORM') // "ios" or "android"

```

If you need to use `plutil` or `/usr/libexec/PlistBuddy` to edit your iOS app's `Info.plist`, you can do so from your scripts with `Deno.Command`:

```typescript

  import { join } from "https://deno.land/std@0.224.0/path/mod.ts"

  const projectPath = Deno.env.get('ADALO_APP_PROJECT_PATH')
  const projectName = Deno.env.get('ADALO_APP_PROJECT_NAME')

  const infoPlistPath = join(projectPath, `ios/${projectName}/Info.plist`)


  const proc = await new Deno.Command("plutil", [
  "-insert",
  "UIBackgroundModes",
  "-xml",
  "<array><string>audio</string></array>",
  infoPlistPath,
]).output();


```

That should be everything you need to modify the build directly.

:::important

We're using Deno v1.44.1

Check Deno's docs to understand the permissions your script has when running on our build servers: (Permissions)[https://docs.deno.com/runtime/manual/basics/permissions]

:::

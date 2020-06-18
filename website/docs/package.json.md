---
id: package.json
title: package.json
---

## Example

In your `package.json` you will need to add an additional section called `"adalo"` that will look something like this:

```json
{
  "name": "my-package",
  "version": "0.0.1",
  "dependencies": { ... },
  "adalo": {
    "displayName": "My Package",
    "components": [
      {
        // "name" must match the exported name from your module.
        // i.e. if you `import { FirstComponent } from 'my-package'` then you would put:
        "name": "FirstCompnent",

        // "manifest" is the relative path to the manifest.json file, relative to package.json
        "manifest": "./src/FirstComponent/manifest.json"
      },
      {
        "name": "Second Component",
        "manifest": "./src/SecondComponent/manifest.json"
      }
    ]
  }
}
```

## Keys

### `displayName`

- Type: `String`

Name of your package

```json
{
  "adalo": {
    "displayName": "My Package"
  }
}
```

### `components`

- Type: `Array`

An array of objects containing a `name` and `manifest` key

#### `name`

- Type: `String`

Name of your component

:::note Note
Your name should match the exported name from your module
:::

#### `manifest`

- Type: `String`

Relative path, from the `package.json`, to the `manifest.json` for your component

```json
{
  "adalo": {
    "components": [
      {
        "name": "FirstComponent",
        "manifest": "./src/FirstComponent/manifest.json"
      }
    ]
  }
}
```

---
id: package-json
title: package.json
---

Your `package.json` is the source for information about your package.

:::caution
The package.json used to contain a lot of other information specific to Adalo, which is now located in the `adalo.json` file.
:::

## Example

```json
{
  "name": "example-library",
  "version": "1.2.3",
  "main": "index.js"
}
```

:::note
The package.json will also have `description` and `author`, but Adalo references these in the `adalo.json` file for your listing.
:::

## Keys

### `name`

- Type: `String`
- Format: [kebab-case](https://en.wiktionary.org/wiki/kebab_case)

The name of your Adalo Library. This will be used for referencing your library and deploying to our registry.

When choosing a name for your Library, choose a name that

- is unique
- is descriptive

Additionally, when choosing a name for an unpublished library, also choose a name that

- is not already owned by someone else
- is not spelled in a similar way to another library name
- will not confuse others about authorship

:::caution
Once you have published your library you can **NOT** change your library name.
:::

### `version`

- Type: `String`

The current version of your Adalo Library. We use `semver` for versioning at Adalo.

For any changes to any of your Components `manifest.json`

- Additions require a minor version upgrade: `1.0.0` => `1.1.0`
- Removals or Heavy Modifications require a major version upgrade: `1.0.0` => `2.0.0`

### `main`

- Type: `String`
- Format: Relative path to image
- Allowed File Extensions: `.js`

The main entry point for your Library.

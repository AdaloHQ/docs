---
id: adalo-json
title: adalo.json
---

:::note
This is a new feature, so make sure to upgrade to the latest version of the CLI to use it.
:::

Your `adalo.json` is the source for information about your library.

## Example

```json
{
  "displayName": "Example Library",
  "author": "Bob Smith",
  "description": "Example library description.",
  "details": "Some extra details",
  "logo": "./logo.png",
  "price": 0,
  "demoAppURL": "https://preview.adalo.com/a4fe41a0-1b00-46e2-977a-aad0439e4bac/screens",
  "supportURL": "https://www.adalo.com",
  "requiresThirdPartySubscription": false,
  "components": [
    {
      "name": "ExampleComponent",
      "manifest": "./src/components/ExampleComponent/manifest.json"
    }
  ],
  "iosInstallScript": "./scripts/install_ios.sh",
  "androidInstallScript": "./scripts/install_android.sh",
  "webpackConfig": "./webpack.config.js"
}
```

## Keys

### `displayName`

The name of your Adalo Library. This will be used when displaying your library in the Marketplace.

### `author`

The author property is currently used to show who the Library was created by in the Marketplace Library Browser.

### `description`

- Type: `String`

The description of your Adalo Library. This will be used in the Marketplace Library Browser.

### `logo`

- Type: `String`
- Format: Relative path to image
- Allowed File Extensions: `.png`
- Dimensions:
  - `min-height: 90px`
  - `min-width: 90px`

This image will be used in the Component Marketplace Browser. Logos should be at least `90px x 90px`.

#### Example Logo

![Example logo for Libraries](/img/example-logo.png)

### `details`

This is an extended description of your Adalo Library. This will be used on the details page for your Library in the Marketplace. It can take basic markdown, including bold and italics.

### `price`

If you chose to charge for your Library, you can set the price here. If your library is free or private, you can leave this blank.

:::note
You cannot convert your library from public to private, and vice versa. Contact the Adalo team for more assistance.
:::

### `demoAppURL`

Provide a link to an Adalo app here that showcases components in your library. Makers will be able to see this link on the Marketplace feed.

:::note
This is optional for free libraries, but is required for paid libraries.
:::

### `supportURL`

URL to a link where a maker can find support for your library, or contact you for more information.

### `requiresThirdPartySubscription`

Boolean. Set to true if your library requires a third party subscription to use.

### `components`

- Type: `Array`

List of individual components in your library. Components in this list have the format:

```json
{
  "name": "ComponentName",
  "manifest": "./src/components/ComponentName/manifest.json"
}
```

Names of components should follow the naming convention of React components, with
mixed case and each internal word capitalized.

### `iosInstallScript`

- Type: `String`

Optional. Relative path to script that can add steps the ios build process,
for example by installing additional dependencies, adding lines to the Podfile, etc.

See [install scripts](/docs/workflow/install-scripts) for more information.

### `androidInstallScript`

- Type: `String`

Optional. Relative path to script that can add steps the android build process,
for example by installing additional dependencies, adding options to gradle files, etc.

See [install scripts](/docs/workflow/install-scripts) for more information.

### `webpackConfig`

- Type: `String`

Optional. Relative path to a custom webpack config file. If you don't specify one,
we will use our own.

:::important
Make sure to make your config the only export of the webpack config file.
:::

See [webpack configs](/docs/workflow/webpack) for more information.

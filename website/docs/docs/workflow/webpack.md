---
id: webpack
title: Webpack
---

:::important
This section is completely optional, and is not necessary in most use cases.
:::

### Background
Webpack is the bundler Adalo uses, and we supply a default config for every component library. In **most** cases, the default config will be all you need. There are some cases though where you may want to use your own webpack configuration.

### Add your own custom Webpack Configuration

In order to do this, create a webpack config file within your library's directory. Next, edit the `package.json` and add under the `adalo` property:

```json
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
    "webpackConfig": "./relative/path/to/config"
  }
}
```

:::important
Make sure to make your config the only export of the webpack config file.
:::

### Example

If you choose to specify your own webpack config file, you are welcome to use this file as a starting point.

> This example expects you to have the Adalo CLI installed as a dev dependency of your component: `yarn add --dev @adalo/cli`

```javascript
const webpack = require('webpack')
const {AdaloDefaultConfig} = require('@adalo/cli/src/webpackConfig')

/**
 * Determine if we're in dev mode or production mode based on the 
 * build command: `adalo dev` or `adalo build`
 */
const MODE = process.argv.includes('dev') ? 'DEVELOPMENT' : 'PRODUCTION';

if(MODE === "DEVELOPMENT"){
    AdaloDefaultConfig.plugins.push(
        // some development plugin
    )
}

// Modify defaultConfig as needed

module.exports = AdaloDefaultConfig
```

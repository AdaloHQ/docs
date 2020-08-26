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

```javascript
const webpack = require('webpack')
const defaultConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ttf$/, /\.otf$/],
        loader: require.resolve('url-loader'),
        options: {
          // limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  externals: {
    react: 'React',
    'react-native': 'ReactNative',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
      '.web.react.js',
      '.react.js',
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
}

module.exports = defaultConfig,
```
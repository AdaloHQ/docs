---
id: example-custom-webpack
title: Custom Webpack Config
---

If you choose to specify your own webpack config file, you are welcome to use this file as a starting point.
:::important
Make sure to make your config the only export of the webpack config file.
:::

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
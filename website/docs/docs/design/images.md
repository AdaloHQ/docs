---
id: images
title: Images
---

Sometimes, instead of rendering certain parts of your component in the editor, you may want to just render a placeholder image. For example, the maps component renders a static placeholder image instead of the actual maps component in the editor. See ["Component Rendering"](/docs/interactions/component-rendering) for more information on how to render a placeholder image in the editor.

## Using Images in Your Component

Inside a component's manifest, one of the [Adalo datatypes](/docs/configuration/manifest-json#type) you can use is the image datatype.

In order to use images in Adalo, you must import and use the `Image` component provided by React Native instead of React's `<img>` tag.

Use this example and React Native's [documentation](https://reactnative.dev/docs/image) for reference:

```javascript
// index.js
import React, { Component } from "react";
import { Image } from "react-native";

class MyComponent extends Component {
  render() {
    const { image } = this.props;
    return <Image style={{ height: 100, width: 100 }} source={image} />;
  }
}
```

:::note
`Image` components will only render if both width and height are specified. `img` tags will not render in the application preview.
:::

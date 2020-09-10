---
id: icons
title: Icons
---

Inside a component's manifest, one of the [Adalo datatypes](/api-reference/configuration/manifest-json#type) you can use is the icon datatype.

In order to use icons in Adalo, you must install [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) and import the material icons.

The prop with type icon, when it reaches your component, will simply be a string that's the name of the icon specified in the editor.

Use this example for reference:

```javascript
// index.js
import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

class MyComponent extends Component {
  render() {
    const { icon } = this.props;
    return <Icon name={icon} />;
  }
}
```

:::note
When you set defaults for an icon prop inside your manifest, make sure to use hyphens instead of underscores between words.
:::

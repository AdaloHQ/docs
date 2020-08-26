---
id: component-rendering
title: Component Rendering
---

Listed below are a few tips and tricks having to do with component rendering.

## Platform-Based Rendering

Sometimes, you want to load different versions of a file depending on what platform the user is on. React Native makes this incredibly easy: all you have to do is add an extra extension. For example, if you wanted to make a version of `index.js` specifically for web, all you have to do is make a new file with the name `index.web.js`. The original `index.js` will act as the default, and `index.web.js` will automatically be used on web. See ["Cross-Platform Compatibility"](/docs/workflow/cross-platform) for more details.

## Render Something Different in the Editor

There are times you want to render something different, like a placeholder image, in the editor. This is very easy to do in Adalo. Every component is passed an `editor` prop, which is true when the component is rendered in the editor and false otherwise. This allows you to conditionally render different components based on context.

## Forcing a React Component to Re-Render

Most React and React Native components automatically re-render when their props change. This makes changing values in the editor very intuitive - changed values automatically get reflected in the editor.

There are some times when this is not the case, however. For example, many icon components don't automatically re-render when their `size` prop is changed. To get around this limitation, you can add a `key` prop to the component, and make its value dynamically tied to the prop that isn't working. In the Icon example, this might look like:

```javascript
import React, { Component } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class AdaloComponent extends Component {
    render() {
        const { iconSize } = this.props
        return(
            <Icon name="play" size={iconSize} key={`playIcon.${iconSize}`}>
        )
    }
}
```

The Icon component will now be forced to re-render whenever its key changes value, and thus when iconSize changes value.

:::note
If you use key in multiple places, make sure each key is unique. For example, if you have 3 icons that each have a key value, each key must be unique.
:::

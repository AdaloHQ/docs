---
id: resizing
title: Resizing
---

Some of the base-level props in the [component manifest](/api-reference/configuration/manifest-json) detail the sizing of the component:

- `defaultWidth` and `defaultHeight` set the default sizing when the app creator drags the component into their app.
- `resizeX` and `resizeY` set the ability for the app creator to resize the component in the x and y directions, respectively. `resizeX` defaults to true, and `resizeY` defaults to false.

## Dynamic Resizing Based on Screen Width

:::note
The following is only required if your component should dynamically change width based on screen size. For example, the slider component does this.
:::

When the app creator resizes your component to within 50 pixels of either border, the component should dynamically resize to the width of the screen. Making this work in your code isn't hard, but it does require a few extra steps:

- Add a `width` to the component's state, and set it to `null` by default.
- Add a `handleLayout` callback for a React Native `View` like so:

  ```javascript
  handleLayout = ({ nativeEvent }) => {
    const { width } = (nativeEvent && nativeEvent.layout) || {};
    const { width: prevWidth } = this.state;

    if (width !== prevWidth) {
      this.setState({ width });
    }
  };
  ```

- Make the `handleLayout` a callback to the main View's `onLayout` event:
  ```jsx
  <View
    onLayout={this.handleLayout}
  >
  ```
- Set the width of the React component to `this.state.width`
- Make sure to conditionally render the component in the `View` so that if `this.state.width === null` that the component does not render.

The `create-adalo-component` tool includes all of this.

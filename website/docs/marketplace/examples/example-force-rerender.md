---
id: example-force-rerender
title: Force Component to Re-Render
---

Sometimes, some parts of a component will not re-render in the editor, even if you change a value. 
In order to force a re-render, you can add a `key` prop to the component like so:

```javascript
export default class AdaloComponent extends Component {
  render() {
    const { iconSize, iconColor } = this.props
    return (
      <Icon
        key={`playButton.${iconSize}`}
        color={iconColor}
        size={iconSize}
      />
    )
  }
}
```

In this example, the problem was that `Icon` would not re-render in the editor when I changed its size.
To fix this issue, I added a prop to `Icon` called `key`. Its value is a string that changes value whenever
`iconSize` changes value. It is also a unique string, meaning that if I have multiple icons they each need to
have their own key value. 

With this key prop, `Icon` will automatically re-render every time the icon size prop changes.
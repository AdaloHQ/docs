---
id: example-editor-prop
title: Conditionally Render Based on Context
---

Sometimes when you add your component to the editor, the library doesn't display anything unless
you're looking at it in preview. In these cases, it is still important to render *something* in
the editor. Every component is passed an `editor` prop, a flag that returns true when the component
is rendered in the editor. You can use this prop to conditionally render something:

```javascript
export default class AdaloComponent extends Component {
  render() {
    const { editor } = this.props
    if(editor) {
      return <Text>I'm being rendered inside editor!</Text>
    }
    else {
      return <RealComponent/>
    }
  }
}
```

In this example, if the component is being rendered inside the editor, the text will render instead
of `RealComponent`. Make sure whatever is being rendered is representative of what will be rendered
in the user's actual app.
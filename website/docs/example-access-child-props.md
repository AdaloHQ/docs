---
id: example-access-child-props
title: Accessing Child Props
---

When you put props under different `childComponents` they will show up as child props.

Example manifest:

```json
{
  ...
  "childComponents": [
    {
      "name": "childComponent",
      "displayName": "Child Component",
      "props": [
        {
          "name": "exampleProp",
          "displayName": "Example Prop",
          "type": "text",
          "default": "default",
        },
      ]
    }
  ]
}
```

To access the prop `exampleProp`, you access it as a child prop to `childComponent`:

```javascript
const { childComponent: exampleProp } = this.props; // Same as doing this.props.childComponent.exampleProp
```

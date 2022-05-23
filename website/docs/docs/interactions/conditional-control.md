---
id: conditional-control
title: Conditional Control
---

There are times you want to enable or disable a prop based on specific parameters. Adalo gives you two ways to do this:

- Enabling/disabling specific props
- Enabling/disabling whole child components

### Enabling/disabling specific props
You can add `enabled` to an Adalo prop object, whose value is an object. See the example below:

```json
{
  "childComponents": {
    "props": [
      {
        "name": "parentProp",
        "displayName": "Parent Prop",
        "type": "boolean",
        "default": "true"
      },
      {
        "name": "dependentOfParent",
        "displayName": "dependentOfParent",
        "type": "text",
        "enabled": {
          "parentProp": true
        }
      }
    ]
  }
}
```

`dependentOfParent` will only appear in the editor if `parentProp` is set to true.

This will look like this in the editor:
<img src="/img/enabled-prop.gif" alt='Enabled Prop Example' />

### Enabling/disabling whole child components

You can disable all of a child component by adding an `enabled` prop. See the example below:

```json
{
  ...
  "childComponents": [
    {
      "name": "childComponent",
      "displayName": "Child Component",
      "props": [
        {
          "name": "enabled",
          "type": "boolean",
          "default": true
        }
      ]
    }
  ]
}
```

The `enabled` option will add a switch right next to the accordion which can turn on and off the child component. This only works if you make the prop's name "enabled", and it's a prop of a child component.

This is what it looks like in the editor:

<img src="/img/enabled-child-component.gif" alt='Enabled Child Component Example' />

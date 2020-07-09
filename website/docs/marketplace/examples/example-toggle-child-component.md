---
id: example-toggle-child-component
title: Toggle Child Component
---

```json
{
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
}
```

The `enabled` option will add a switch right next to the accordion which can turn on and off the child component.
See Adalo's "App Bar" for an example of what this looks like.x

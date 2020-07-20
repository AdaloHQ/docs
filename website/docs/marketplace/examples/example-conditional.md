---
id: example-conditional
title: Conditional Control
---

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

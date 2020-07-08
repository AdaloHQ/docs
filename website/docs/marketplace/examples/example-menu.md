---
id: example-menu
title: Menu
---

```json
{
  ...
  "props": [
    {
      "name": "position",
      "displayName": "Position",
      "type": "number",
      "default": 1,
      "control": {
        "type": "menu",
        "options": [
          { "label": "Option 0", "value": 0 },
          { "label": "Option 1", "value": 1 },
          { "label": "Option 2", "value": 2 }
        ]
      }
    }
  ]
}

```

This will render a `menu` in the Adalo editor, giving creators specific options for an input.

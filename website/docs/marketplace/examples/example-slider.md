---
id: example-slider
title: Slider
---

```json
{
  ...
  props: [
    {
      "name": "rounding",
      "displayName": "Rounding",
      "type": "number",
      "default": 4,
      "control": { "type": "slider", "max": 18, "min": 0 }
    }
  ]
}
```

By adding `control` of type `slider` the input will render as a slider in Adalo's editor.

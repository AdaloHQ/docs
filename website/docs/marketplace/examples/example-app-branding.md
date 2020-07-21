---
id: example-app-branding
title: App Branding
---

```json
{
  ...
  "props": [
    {
      "name": "filledColor",
      "displayName": "Filled Color",
      "type": "color",
      "default": "@primary"
    },
  ]
}

```

The default color will be whatever the creator has set to be their "primary" color. Other options are:

- @secondary
- @default
- @text

You can also use the code `@contrast` to designate a contrast with a different color. Example:

```json
{
  ...
  "props": [
    {
      "name": "backgroundColor",
      "displayName": "Background Color",
      "type": "color",
      "default": "@primary"
    },
    {
      "name": "textColor",
      "displayName": "Text Color",
      "type": "color",
      "default": "@contrast:backgroundColor"
    }
  ]
}
```

In this case, `textColor` will, by default, be the best contrast with `backgroundColor`. This means
that if the background color is light, the text color will be dark, and vice versa.
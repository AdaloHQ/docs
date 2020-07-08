---
id: example-adalo-actions
title: Calling Adalo Actions
---

Say you allow the creator to specify additional actions when a button in your component is clicked:

manifest.json:

```json
{
  ...
  "props": [
    {
      "name": "exampleAction",
      "displayName": "Additional Actions when Example Occurs",
      "type": "action",
    },
  ]
}
```

In the code, `exampleAction` will now refer to a function that, when called,
will execute the actions that the app creator specifies. You can call it like so:

```javascript
exampleFunc = () => {
  let { exampleAction } = this.props;
  if (exampleAction) exampleAction();
};
```

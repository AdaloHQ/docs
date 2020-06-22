---
id: example-action-arguments
title: Action Arguments As Magic Text
---

To route data from your component to actions, you need to do two things: specify
arguments in the `manifest.json` and add those arguments when you call the actions
in your code.

manifest.json:

```json
{
  ...
  "props": [
    {
      "name": "exampleAction",
      "displayName": "Example Action",
      "type": "action",
      "arguments": [
        {
          "type": "number",
          "displayName": "Argument 1"
        },
        {
          "type": "text",
          "displayName": "Argument 2"
        }
      ]
    }
  ]
}
```

In the "recommender", where Adalo suggests different magic texts for the app creator,
your component will now show up as an expandable tab, and `Argument 1` and `Argument 2`
will show up as options for actions under "Example Action".

It is datatype specific, so "Argument 2" will NOT show up if the field is number-only.

To actually send those values to Adalo, you must send them as arguments:

```javascript
exampleFunc = () => {
  const arg1 = 0;
  const arg2 = "text";
  const { exampleAction } = this.props;
  if (exampleAction) exampleAction(arg1, arg2);
};
```

---
id: actions
title: Actions
---

Actions in Adalo are one way to connect your component to the rest of the Adalo ecosystem. You can add actions to your component by declaring them as props in the component manifest:

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
  const { exampleAction } = this.props;
  if (exampleAction) exampleAction();
};
```

Try to include actions wherever you can. For example, an image component should have an action for when the user clicks on the image.

### Arguments as Magic Text

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

:::note

Sending the values to Adalo varies slightly when dealing with files or images. In the code, files and images should be passed to the action as `{ uri, filename }` or `{ data, filename }` objects. If an object contains both `uri` and `data` fields, the `data` field will be used. In the code this will look like:

```javascript
exampleFunc = () => {
  const fileArgument = { uri: 'exampleurl.pdf', filename: 'examplePDF' }
  const imageArgument = { data: exampleImageData, filename: 'exampleJPG' }
  const { exampleAction } = this.props;
  if (exampleAction) exampleAction(fileArgument, imageArgument)
}
```

:::
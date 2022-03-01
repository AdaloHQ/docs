---
id: child-components
title: Child Components
---

You can use `childComponents` to group props in a logical way. Child components add extra accordions to the left editor panel, and group props into nested objects in your code.

Here's what a component manifest with child components can look like:

```json
{
  ...
  "props": [
    {
      "name": "prop1",
      "displayName": "Prop 1",
      "type": "number",
      "default": 0
    },
  ],
  childComponents: [
    {
      "name": "childComponent",
      "displayName": "Child Component",
      "props": [
        {
          "name": "prop2",
          "displayName": "Prop 2",
          "type": "text",
          "default": "Default Text"
        }
      ]
    }
  ]
}
```

In the editor, there will be a main accordion with the component's name and another accordion labelled "Child Component". The main accordion will have "Prop 1" and the "Child Component" accordion will have "Prop 2". Here's what the props object will look like in the component code:

```json
{
  "prop1": 0,
  "childComponent": {
    "prop2": "Default Text"
  }
}
```

## Child Component Editor States

Sometimes a child component corresponds to a specific state of the component. For example, Adalo's built-in list components have an empty state. When you open that child component in the editor,the component renders the empty state. This makes it much easier for makers to configure the empty state.

Here's how it works - inside the editor, every component gets passed in a prop called `openAccordion`, which is the name of the child component that is currently open. The values are either `null`, `root`, or the name of the child component.

Check out the code [here](https://github.com/AdaloHQ/material-components-library/blob/main/src/SimpleList/index.js#L127).

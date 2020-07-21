---
id: example-role-list
title: Enabling Access to Current List Item
---

Say you have a prop of type "list", and you want the magic text inside an action to reference the current list item.
You can use the `role` and `reference` properties of a `prop` to enable this:

```json
{
    ...
    "props": [
        {
            "name": "list-prop",
            "displayName": "What is this a list of?",
            "type": "list"
        },
        {
            "name": "list-item-action",
            "displayName": "Click actions on list item",
            "type": "action",
            "role": "listItem",
            "reference": "list-prop"
        }
    ]
}
```

In order to access the current list item as magic text within the action, you must specify both `role` and `reference`.
`role` should be set to `listItem`, and `reference` should be set to the name of the list property, in this case `"list-prop"`.

You can find more information about this in the [component manifest](https://developers.adalo.com/api-reference/marketplace/manifest-json#role) documentation.
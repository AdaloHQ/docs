---
id: control-types
title: Control Types
---

These are some advanced properties you can add to your Adalo props to the way they look in the editor and how they interact with Adalo.

## Prop-Type "Control"

You can add the key `control` to any Adalo prop, whose value is an object.

### Slider

For example, if you want your number input to show up in the editor as a slider, you can add this control prop:

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

Which will make the number input look like this in the editor:

<img src="/img/slider.gif" alt='Slider Example' />

Each `control` object has the key `type`, which corresponds to the control type. The other values inside the control object differ depending on the control type.

You can find a full list of control types in the [component manifest](/api-reference/configuration/manifest-json), but here are a few other common control types:

### Menu

To make a prop show up as a dropdown menu, you can add the control type of `menu`:

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

Which will look like this in the editor:

<img src="/img/menu.gif" alt='Menu Example' />

## Working with Adalo Lists (Role and Reference)

One data type a prop can be is a list, and often you want other props to be able to reference the current list item. In order to do this, you must add two properties to that individual Adalo prop: `role` and `reference`. See the example below:

```json
{
    ...
    "props": [
        {
            "name": "listProp",
            "displayName": "What is this a list of?",
            "type": "list"
        },
        {
            "name": "listItemAction",
            "displayName": "Click actions on list item",
            "type": "action",
            "role": "listItem",
            "reference": "listProp"
        }
    ]
}
```

In order to access the current list item as magic text within the action, you must specify both `role` and `reference`.
`role` should be set to `listItem`, and `reference` should be set to the name of the list property, in this case `"listProp"`.

You can find more information about this in the [component manifest](https://developers.adalo.com/api-reference/configuration/manifest-json#role) documentation.

## Disabling List Controls

Makers have access to a number of controls when working with lists. If you wish to disable any of these controls, that can be done by adding the `listControl` prop to your `manifest.json` file. All list controls will default to being visible unless specified otherwise. Below is an example of how you can disable the option for a user to sort and filter the items in a list:

```json
{
  ...
  props: [
    {
      "name": "listItems",
      "displayName": "Select list items",
      "type": "list",
      "listControl": {"sort": false, "filter": false},
    }
  ],
}
```

This will change the editor from its default appearance:

<img src="/img/Default-List-Control.png" />

To this, where the `sort` and `filter` controls have been disabled:

<img src="/img/List-Control-Filter&Sort-Disabled.png" />

You can find more information about the `listControl` prop and the different list controls in the [component manifest](/api-reference/configuration/manifest-json#listcontrol) documentation.

## Modifying Values in the Database

Sometimes you want your component to actually directly modify values in the database. For example, a switch component would be pretty useless if it couldn't switch a property in the database. All you have to do to get access to the database is add the role `autosaveInput` to a component. For example:

```json
{
  ...
  "props": [
    {
      "name": "controlledValue",
      "displayName": "What Property Does This Adjust?",
      "type": "number",
      "role": "autosaveInput"
    },
  ]
}

```

Now, a prop `controlledValue` will be passed to the React component with the structure: `{ value: x, onChange: f() }`, where `value` is the value of that property in the database, and `onChange` is a function you can call to change that value.

::: note

Using the `onChange` function with the `file` or `image` datatype varies slightly. When dealing with files or images, the `onChange` function should be passed on object containing `filename` and `uri` or `data` fields for the new value. This can look like `{ uri, filename }` or `{ data, filename }`. If an object contains both `data` and `uri` fields, the `data` field will be used. 

:::
It's a little tricky to test this prop because getting access to an individually adjustable prop isn't trivial. There are two quick ways to do this:

- Add a property to the users table that is the same datatype as the property in your component. Then, log in the user somewhere on your test app and that component will then get access to "Logged in user => property".
- Make a list, and then make a click property of that list link the user to another screen. The next screen will then have access to the individual props of current list item.

Here's what the first one looks like in the editor:

<img src="/img/autosaveInput-example-loggedInUser.png" alt='Autosave Input Example' />

And here's what the second one looks like in the editor:

<img src="/img/autosaveInput-example-lists.png" alt='Autosave Input Example' />

## Modifying Values From a List

Sometimes the values or files that you want to modify in the database may be part of a list. In order to give a prop teh `autosaveInput` or `upload` role, as well as the `listItem` role, you must set the `role` prop to an array containing the two values as opposed to a string of one value. For example, a prop with the roles of `listItem` and `autosaveInput` would look like: 

```json
{
  ...
  "props": [
    ...,
    {
      ...
      "role": ["listItem", "autosaveInput"]
    }
  ]
}
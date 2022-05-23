---
id: modifying-database-values
title: Modifying Values in the Database
---

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

:::note

Using the `onChange` function with the `file` or `image` datatype varies slightly. For more information, see [Files and Images](./files-and-images).

:::
It's a little tricky to test this prop because getting access to an individually adjustable prop isn't trivial. There are two quick ways to do this:

- Add a property to the users table that is the same datatype as the property in your component. Then, log in the user somewhere on your test app and that component will then get access to "Logged in user => property".
- Make a list, and then make a click property of that list link the user to another screen. The next screen will then have access to the individual props of current list item.

Here's what the first one looks like in the editor:

<img src="/img/autosaveInput-example-loggedInUser.png" alt='Autosave Input Example' />

And here's what the second one looks like in the editor:

<img src="/img/autosaveInput-example-lists.png" alt='Autosave Input Example' />

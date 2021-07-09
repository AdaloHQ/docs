---
id: component-data
title: Component Data
---

Component data is exported from your component for use in the rest of a makers app in the form of Magic Text. You can implement Component Data into your component by declaring props with the roles of `formValue` and `formChangeHandler` in the component manifest:

```json
{
  ...
  "props": [
    {
      "name": "exampleFormValue",
      "displayName": "Example Form Value",
      "type": "text",
      "role": "formValue"
    },
    {
      "name": "exampleFormChangeHandler",
      "displayName": "Example Form Change Handler",
      "type": "action",
      "role": "formChangeHandler",
      "reference": "exampleFormValue"
    }
  ]
}
```

In the code, `exampleFormChangeHandler` will now refer to a function that will update `exampleFormValue` and execute an action, if one has been set, when called, `exampleFormValue` will refer to the value that the component is exporting and will be updated when `exampleFormChangeHandler` is called, and `exampleFormValue_initial` will refer to the initial value of `exampleFormValue`. These values can be used like so:

```javascript
exampleComponent = (props)=> {
    let { exampleFormValue, exampleFormValue_initial, exampleFormChangeHandler } = props

    return (
        <TextInput
            onChangeText={exampleFormChangeHandler}
            value={exampleFormValue}
            placeholder={exampleFormValue_initial}
        />
    )
}
```

### `formChangeHandler` Actions

In addition to updating the `formValue`, the `formChangeHandler` can also execute an action set by the maker. This allows users to, for example, update an objects property live as they type. This functionality can be disabled by using the `hidden` property on the `formChangeHandler` prop. The `formChangeHandler` will still need to be called in order to update the `formValue`, but the maker will no longer have the option to assign an additional action.
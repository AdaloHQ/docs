---
id: form-components
title: Form Components
---

Form components in Adalo are able to export data to any place in a maker's app. You can make a form component by declaring `formValue` and `formChangeHandler` props in the component manifest:

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
        },
    ]
}
```

In the code, `exampleAction` will now reference a function that, when called, executes actions that are specified by the app creator. The value of `formValue`, in this case the text input, can also be referenced throughout the app. The `exampleFormValue_initial` prop is automatically generated and will always be equal to the value that the app creator sets in the editor for a prop with the `formValue` role.

```javascript
exampleFunc = (props) => {
    const { exampleFormValue, exampleFormChangeHandler } = props
    <TextInput
        onChangeText={exampleFormChangeHandler}
        value={exampleFormValue}
        placeholder={exampleFormValue_initial}
    />
}
```
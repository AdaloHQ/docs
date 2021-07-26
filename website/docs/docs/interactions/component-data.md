---
id: component-data
title: Component Data
---

Component data is exported from your component for use in the rest of a makers app in the form of Magic Text. You can implement Component Data into your component by assigning props the role of `formValue` in the component manifest:

```json
{
  ...
  "props": [
    {
      "name": "exampleFormValue",
      "displayName": "Example Form Value",
      "type": "text",
      "role": "formValue"
    }
  ]
}
```

In the code, `exampleFormValue` will now refer to a `{ value, onChange, initial }` object. 


When called, `exampleFormValue.onChange` will update `exampleFormValue.value`. `exampleFormValue.value` refers to the value that the component is exporting and can be accessed throughout the app as Magic Text. Additionally, `exampleFormValue.initial`will always refer to the initial value of `exampleFormValue.value` and can be useful for purposes such as setting placeholder values.

 These values can be used in the code like so:

```javascript
exampleComponent = (props)=> {
    const { exampleFormValue } = props

    return (
        <TextInput
            onChangeText={exampleFormValue.onChange}
            value={exampleFormValue.value}
            placeholder={exampleFormValue.initial}
        />
    )
}
```

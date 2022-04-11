---
id: files-and-images
title: Files and Images
---

When working with the `file` and `image` data types, the ways in which you interact with props in code will vary. This can happen in a few different places.

## Prop Value

Props of type `file` or `image` will pass their values to the component as an object. If the maker has chosen the file or image via the URL option, this object will contain only the location of the hosted image or file and be structured as `{ uri }`. Otherwise, the object will be structured as `{ uri, filename, size }` where `uri` is the location of the hosted file/image, `filename` is the name of the file/image, and `size` is the size of the file/image in bytes. This object can be accessed in the code using `propName.value`.

## `onChange` Functions

When a prop of type `file` or `image` is given the role of either `formValue` or `autosaveInput`, the usage of the resulting `onChange` function will vary from it's usage with other datatypes. When working with these types, the `onChange` function will need to be passed an object containing the `filename` and the `uri` (either local or hosted) or `data` (as a base64 encoded string) of the new file, ex: `{ uri, filename }` or `{ data, filename }`. If the object contains both `data` and `uri`, the `data` field will be used by default.

:::note
The `filename` passed to the `onChange` function must contain the file extension. ex. .JPG, .PDF, .PNG, etc.
:::

## Action Arguments

Using action arguments with the `file` and `image` types varies in a similar way to the `onChange` function for the `formValue` and `autosaveInput` roles. When being passed as arguments, files and images should be structured as an object containing a `filename` and `uri` (either local or hosted) or `data` (as a base64 encoded string) for the file/image being passed to the function. Like with the `onChange` function, if both `uri` and `data` fields are present in the object the `data` field will be used by default. in the code, this looks like:

```javascript
exampleFunc = () => {
  const fileArgument = { uri: "exampleurl.pdf", filename: "examplePDF" };
  const imageArgument = { data: exampleImageData, filename: "exampleJPG" };
  const { exampleAction } = this.props;
  if (exampleAction) exampleAction(fileArgument, imageArgument);
};
```
:::note
When using the `formValue`, `autosaveInput`, or `actionArguments` roles, file validation is handled server side. We confirm that the file is not a script or executable and check that the file extension matches the file type. 
:::

:::note
The `filename` field of the argument must contain the file extension. ex. .JPG, .PDF, .PNG, etc.
:::

:::note
The maximum file upload size when using `formValue`, `autosaveInput`, or `actionArguments` is 50 megabytes
:::

:::note
When implementing files or images into your components, it is important to remember that they are loaded via network requests. In order to maximize performance and create a smooth user experience use placeholders, as well as techniques such as lazy loading and caching to minimize wait times and improve user experience  
:::

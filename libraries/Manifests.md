# Component Manifests

A manifest file describes the properties that a particular component accepts, and which controls to display in the Proton editor. Think of them like **React** **PropTypes**, but with types specific to Proton. You should have one manifest file per component in your library.

## JSON Structure Reference

Manifests include several important properties that help inform Proton which controls to show in the Editor.

Keys:

* `displayName` (string) - The name of the component that will be shown in the editor
* `defaultWidth` (integer) - The width of a new component instance
* `defaultHeight` (integer) - The height of a new component instance
* `props` - (array of objects) - List of top-level props. See [Props](#props)
* `childComponents` (array of objects) - List of child components. See [Child Components](#child-components)
* `icon` (relative filepath) - The path to the icon for this component
* `resizeX` (boolean, default: `true`) - Whether the component can be horizontally resized
* `resizeY` (boolean, default: `false`) - Whether the component can be vertically resized

## Props

Props is a list of properties that can be set on a particular component, with their types, default values, and other constraints.

Prop Keys:

* 	`name` - Technical name of the prop. This should be the same as the react component prop name
*  `displayName` - The name to show in the Proton editor, and display to end user
*  `enabled` - This is used to show or hide this specific prop based on the value of another prop. To use, pass an object with a single key (the prop name) and value (the desired value)
	- For example `{"type": "outlined"}` would cause this particular prop to be disabled / invisible unless the prop named "type" had the value "outlined"
* `hidden` - (default: `false`) - whether or not to show this prop in the UI. Useful for `formChangeHandler`'s, or anywhere that you want the default value to be passed.
* `default` - The default value of this prop
*  `type` - The type of value that is expected. Valid types include:
	- `"text"` - Arbitrary text. This may be either static or dynamic.
	- `"number"` - Arbitrary number.
	- `"boolean"` - Boolean value. This will display as a checkbox.
	- `"icon"` - The name of a material icon to use. For a full list of possible icon name, see the "MaterialIcons" section [here](https://oblador.github.io/react-native-vector-icons/)
	- `"color"` - A color string, of form `#ffffff` or `#rgba(255, 255, 255, 1)`
	- `"date"` - An [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) date string (ex: "2018-01-01T00:00:00.000Z")
	- `"list"` - An array of dynamic data. See [Lists](#lists)
	- `"action"`- An user action such as linking to another page, calling an API, etc. Your component will receive a function returning a promise. The promise will return when all of the associated actions have completed.

* `control` (object, optional) - Customize the type of control presented to the user:
	- `type` (string) - the type of control to use (see [Controls Reference](#controls-reference)
	- `options` - dependent on `type` - see [Controls Reference](#controls-reference)
* `role` (string, optional) - designate this as a special prop.
	- `"listItem"` - This prop will be a list child. See [Lists](#lists)
	- `"formValue"` - This prop is the `value` of a controlled input.
	- `"formChangeHandler"` - This prop is the `onChange` of a controlled input. `type` should be `"action"`.
* `reference` (string, optional) - used in conjunction with `role` to reference a related prop.
	- If role is `"listItem"` this should be a prop with `type: "list"`
	- If role is `"formChangeHandler"` this should be the `"formValue"` prop name
* `dynamic` (boolean, optional, default: `true`) - whether this field accepts data bindings.
	- Defaults to `false` for `boolean` and `color` types.

### Reserved Prop Names

* `"enabled"` (boolean) - this will be displayed as a switch if present in a child component's props


### Controls Reference

To customize the control for a prop, you can pass an object containing `type` and `options` to the `control` key of a prop. The available types of controls are:

* `"text"` - the default for **text** & **number** props
	- Options:
		- `dynamic` (boolean, default **true**) - whether or not to allow dynamic text
* `"checkbox"` - the default for **boolean** props
	- _No options_
* `"icon"` - the default for **icon** props
	- _No options_
* `"color"` - the default for **color** props
	- _No options_
* `"action"` - the default for **action** props
	- _No optoins_
* `"menu"` - special control type for **text** & **number** props
	- Options:
		- `options` - (array of objects) - `[{"label": "Hello World", "value": "helloWorld"}]`


## Child Components

Child components allow you to specify props for child components within your component. For example, if you create a button component, and have props specific to the icon in that button, you can optionally place those props within the `childComponents` section.

### Example

Child component props will then be passed to your component in a nested format. 

If you have the following in your manifest.json file:

```
{
  ...
  childComponents: [
    {
      "name": "rightIcon",
      "displayName": "Right Icon",
      "props": [
        {
        	"name": "icon",
        	"displayName": "icon",
        	"type": "icon",
        	"default": "arrow-back"
        }
      ]
    }
  ]
}
```

Then your component will receive the following props:

```
{
  ...
  "rightIcon": {
    "icon": "arrow-back"
  }
}
```

### Keys

* `name` - the technical name of the child component
* `displayName` - the name to display in the Proton editor
* `props` - A list of props for the child compnoent. See [Props](#props)
* `role` - The role of this child component. See [Lists](#lists)
* `reference` - The `name` of a top-level prop to which this child component is related. See [Lists](#lists)

## Lists

Components that intend to display dynamic lists of content must conform to a particular format in order to receive the necessary information.

### List Prop Type

Lists must have one top-level prop of type `list`. The name of this prop will be referenced in child components.

### Other Props

Other top-level `props` that related to the `list` prop can be denoted with the following attributes:

* `role: "listItem"`
* `reference: "YOUR_LIST_PROP"`

This is applicable to both actions and normal props. Then the props passed to your component will be nested under `YOUR_LIST_PROP`.

### Child Components

`childComponents` items can also be given the `role: "listItem"` and `ref` attributes to be considered list item props.

* `role: "listItem"`
* `reference: "YOUR_LIST_PROP"`

Then the props passed to your component will be nested within the list items of `YOUR_LIST_PROP` instead of at the top level.

### Example

The easiest way to understand this is by looking at a simple example. Let's say you are building a simple list component.

#### manifest.json

```
{
  ...
  props: [
    {
      "name": "listItems",
      "displayName": "Select list items",
      "type": "list"
    }
  ],
  "childComponents: [
  	 {
  	   "name": "itemTitle",
  	   "role": "listItem",
  	   "reference": "listItems",
  	   "props": [
  	     {
  	       "name": "text",
  	       "displayName": "Text",
  	       "type": "text",
  	       "default": "Some title text"
  	     }
  	   ]
  	 }
  ]
}
```

### Props

Then our component would receive the following props:

```
{
  "listItems": [
    "id": "1",
    "itemTitle": {
    	"text": "Some title text"
    }
  ]
}
```
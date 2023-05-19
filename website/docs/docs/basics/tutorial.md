---
id: tutorial
title: Tutorial
---

This tutorial will be a short overview of each part of the Adalo component development cycle.

### Creating your library

The best way to create an Adalo library is by using the `create-adalo-component` tool. It generates an npm package with all the necessary dependencies, scripts, and basic starter code for a component.

To run the tool, make sure you have [Node](https://nodejs.org) `>=10.2` installed and that you've [enabled developer mode](/docs/basics/enabling-dev-mode). Then, run:

```bash
npx create-adalo-component my-component
cd my-component

# login with your adalo credentials
npx adalo login

# start the development server
npx adalo dev
```

You can find more information in the [Creating a Component](/docs/basics/create-adalo-component) docs.

### Editing your library

Now, when you log in to your account on Adalo's website and open an app, a new tab will show up in the components panel at the bottom labelled "Development". Your new component will show up here.

Inside your component, you will find a folder labelled `src`, and inside there a folder for the name of your first component. Inside, you'll find two files: `manifest.json` and `index.js`. The `manifest.json` contains all of the configuration for your component. Adalo's editor parses this file and uses it to generate the settings on the left panel in the editor, and each prop inside the manifest is passed down to your component as a React prop. See the [configuration docs](/docs/configuration/manifest-json) for more information.

Edits to `index.js` are automatically reflected in the editor; however, changes to the `manifest.json` will only show up in the editor after a refresh (pressing `^C` in the terminal and running `npx adalo dev` again).

### Testing your library

When you press "preview" on an Adalo app with your component in the editor, you are viewing the _web_ version of your code. You must also test on an iOS simulator and the Android emulator before submitting your code. See [testing](testing) for more details.

### Publishing your library

Once you finish writing your code, you can run `npx adalo publish` to publish your library. See [publishing](publishing) for more information.

### Conclusion

And that's the Adalo component development cycle! Next, continue reading through the basics to get a better overview of what was talked about here and more. Then, see the other tabs for more specific information on different Adalo's library component API.

The [configuration docs](/docs/configuration/package-json) catalogues every possible configuration of the library's `package.json`, as well as the component's `manifest.json`.

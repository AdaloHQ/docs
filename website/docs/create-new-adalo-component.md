---
id: create-new-adalo-component
title: Create a New Adalo Component
---

`create-adalo-component` is a powerful quick start tool for creating new adalo components, and is the best way to start building a new component for Adalo.

It sets up your base environment for building custom components for adalo by installing the required dependencies, adding scripts for development as well as giving you a basic starter `manifest.json` and a basic component.

## Creating a new component

You'll need to have [Node](https://nodejs.org) `>=10.2` on your machine. To create a component, run:

```bash
npx create-adalo-component my-component
cd my-component

# login with your adalo credentials
yarn run login

# start the development server
yarn start
```

:::note Note
`npx` on the first line is not a type — it's a [package runner tool that comes with npm 5.2+](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
:::

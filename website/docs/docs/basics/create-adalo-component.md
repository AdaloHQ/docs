---
id: create-adalo-component
title: Creating a Component
---

`create-adalo-component` is a powerful and quick bootstrapping tool for creating new Adalo Libraries and is the recommended way to start building a new library for Adalo.

It sets up your base environment for building custom components for adalo by installing the required dependencies, adding scripts for development as well as giving you a basic starter `manifest.json` and a basic component.

## Creating a new library

You'll need to have [Node](https://nodejs.org) `>=10.2` on your machine, and you need to [enable developer mode](marketplace/enabling-developer-mode) on your Adalo account. Then to create a component, run:

```bash
npx create-adalo-component my-component
cd my-component

# login with your adalo credentials
npx adalo login

# start the development server
npx adalo dev
```

...then go to Adalo and add a new component to one of your screens. In the **Add** menu you should see a new section called "Development" where you'll find your new component.

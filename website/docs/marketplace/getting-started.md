---
id: getting-started
title: Getting Started
---

You'll need to have [Node](https://nodejs.org) `>=10.2` on your machine, and you need to [enable developer mode](enabling-developer-mode) on your Adalo account. Then to create a component, run:

```bash
npx create-adalo-component my-component
cd my-component

# login with your adalo credentials
npx adalo login

# start the development server
npx adalo dev
```

...then go to Adalo and add a new component to one of your screens. In the **Add** menu you should see a new section called "Development" where you'll find your new component.

If videos are your thing, we have a [playlist of Component Development Tutorials](https://www.youtube.com/playlist?list=PLBUOs6aGzPnS_B3jisLbMMyjIcDB7dPaC)

## Library Standards

Each Adalo Library should strive to solve one particular use case, and solve it well. Don’t be a jack of all trades. Be the master of one. [Read More](requirements/philosophy.md)

## create-adalo-component

`create-adalo-component` is a powerful and quick bootstrapping tool for creating new Adalo Libraries and is the recommended way to start building a new library for Adalo. [Read More](create-new-adalo-library.md)

## Something Missing?

If something is missing the documentation or if you found something confusing, please [file an issue for the documentation repository](https://github.com/adalohq/docs/issues/new) with your suggestions for improvement.

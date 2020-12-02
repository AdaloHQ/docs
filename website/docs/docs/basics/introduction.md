---
id: introduction
title: Introduction
---

Adalo offers a large selection of components to use in apps, but there are still many more components that have not been built yet. Thus, we created the **_Component Marketplace_** to enable external developers to write their own components. Developers can publish **_Libraries_** to the marketplace, which consist of **_Components_**.

#### What is a library?

A library is a collection of components that a developer can package together into an npm package.

#### What is a component?

A component is an individual functional unit within Adalo. Text, buttons, and images are all different components.

### How do I become an Adalo developer?

To become an Adalo developer, you must [enable developer mode](enabling-dev-mode).

### Prerequisites

In order to develop external components for Adalo, you must have [Node](https://nodejs.org) `>=10.2` installed. See [testing](../workflow/testing) for the prerequisites required to test on mobile.

These docs assume you understand Javascript fundamentals and the [EMCAScript 2015](https://flaviocopes.com/ecmascript/) standard, and have a working knowledge of both [React](https://reactjs.org/) and [React Native](https://reactnative.dev/).

### Creating your first component

`create-adalo-component` is a powerful and quick bootstrapping tool for creating new Adalo Libraries and is the recommended way to start building a new library for Adalo. See more in [Creating A Component](create-adalo-component).

### Standards

In order to have your library accepted into the marketplace, you must make sure your component abides by our [standards](/docs/standards/philosophy). Most importantly, make sure that your component is:

- Single-purpose. Each component should be designed to solve one specific use case.
- Cross-platform. Each component should be compatible across web, iOS, and Android.
- Highly configurable. Each component should have a large variety of settings, both functionally and stylistically, to enable app creators to have maximum control over the component.

Pay close attention to the "cross-platform" standard. **We fully expect you to test your component on all three platforms before you submit it for review.** You can use either React or React Native Web on web, but you must write React Native code for mobile. If the library you use for mobile is not React Native Web compatible, see [Cross-Platform Compatibility](/docs/workflow/cross-platform). Also see [Testing](/docs/workflow/testing) for information on testing your component on each platform.

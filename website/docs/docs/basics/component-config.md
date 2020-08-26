---
id: component-config
title: Component Configuration
---

Each component has a `manifest.json`, which contains all component specific configuration.

There are a variety of "base-level props", such as default width, entry file, path to icon, etc., as well as a `props` object, which contains all of the configurable properties that show up in the left panel in the editor. You should use these props to make your component as configurable as possible.

You can also include "Child Components", which have their own `props` object. Child components render as separate tabs in the editor, and are passed as nested objects to your React component.

For more information, take a look at the various docs under "Design" and "Interactions", which detail more specific and hard-to-find configurations of the `manifest.json` file. Also take a look at the [API Reference](/api-reference/configuration/manifest-json).

---
id: general-guidelines
title: General Guidelines
---

There are several specific standards regarding component code that Adalo components must follow:

- Make sure not to run any real logic in the editor. The purpose of the editor is to show the user what the component will look like and nothing else. See [component rendering](/docs/interactions/component-rendering) for more information on how to do this.
- Make sure your component can handle undefined data and empty lists. If the app creator doesn't set the prop, there's a chance `null` or `undefined` gets passed to your component.
- When you publish, make sure your component doesn't have any `console.log` statements.
- Backwards compatibility: app creators, as of now, always get the latest version of your component. In addition, there are currently no migration scripts. This means that components will have the old version of the props, even if it's running the new version of the code. See [backwards compatibility](/docs/workflow/backwards-compatibility) for more information on this.


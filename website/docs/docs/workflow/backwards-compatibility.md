---
id: backwards-compatibility
title: Backwards Compatibility
---

When publishing a new version of your library, it is incredibly important to keep in mind that apps will always pull the latest version of your component, even if they are storing an older version of the props. This means that if you add a new prop or child component, its value will be `null` when the component first initializes.

In order to keep your component from crashing in this case, you must add default props to your component. The main way to do this is using React's [default props](https://blog.bitsrc.io/understanding-react-default-props-5c50401ed37d). If you wrote your component using functional components, you can also use [ES6.def.values](https://medium.com/@matanbobi/react-defaultprops-is-dying-whos-the-contender-443c19d9e7f1).

This also means your component should always support legacy functionality.

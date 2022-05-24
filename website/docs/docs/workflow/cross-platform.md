---
id: cross-platform
title: Cross-Platform Compatibility
---

As the [library standards](/component-standards/philosophy) emphasize, it is **critical** that your component works across all platforms. Some technical points to help with this:

- Our mobile builds use React Native.
- Anything on web can use React Native Web or React.
- You can write different versions of your code for different platforms.
- Some React Native libraries are React Native Web compatible, but some are not.

Here are some example cases in which the component is cross platform:

- The library is written entirely in React Native, but every part of the component (including any external libraries used) is React Native Web compatible. A single version of the code is used on every platform.
- The component requires an external library, and there's no React Native library that's also React Native Web compatible. So, two versions of the code are required: one for mobile that uses a React Native library, and one for web that uses a React library.
- There is no React Native library available, but there's a great React library for the component. As long as no native functionality is required there is a workaround: wrap the component in a webview on mobile. This works, but is discouraged.

See the decision tree at the end for an in-depth guide.

### How to use different versions of your code for different platforms

Writing different codebases for different platforms is actually very easy! React Native has built-in functionality where it automatically picks which file to use based on the extension. For example, if you have two `index.js` files, one called `index.js` and the other called `index.web.js`, the latter will be used on web and the former will be used everywhere else. `index.ios.js` and `index.android.js` are also valid extensions.

React Native treats mobile web (such as Safari on iOS) as web, which may not be the desired behavior. To test if platform is mobile web, you can use code like:

```javascript
const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};
```

This function treats both native mobile apps and mobile web apps as mobile.

### Platform decision tree

<img src="/img/decision-tree.png" width="628" alt='Click to toggle developer more to "true"' />

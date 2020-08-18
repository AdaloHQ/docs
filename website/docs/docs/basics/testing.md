---
id: testing
title: Testing
---

**_Make sure you fully test your components before you publish._** This saves a lot of headaches on everyone's part.

**_Make sure you test every platform, not just web._** When you press "Preview" in the editor, you are viewing the "Web" version of your component. If you didn't use any external libraries, or if your library is a React Native library that's React Native Web compatible, this may be all you need to do; however, if you used a React-specific library, or have separate libraries for React and React Native, you **must** test on mobile as well.

See [Testing](/docs/workflow/testing) for detailed instructions on how to test for each platform, and see [Making Your Component Work Across All Platforms](/docs/workflow/cross-platform) for an explanation of how to make your component compatible on web, iOS, and Android.

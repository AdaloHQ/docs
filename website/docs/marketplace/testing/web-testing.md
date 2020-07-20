---
id: web-testing
title: "Testing on Web"
---

Once you've created an Adalo component with `npx create-adalo-component`, you can immediately test your component on web.
To do so, run in your shell:

```bash
# login with your adalo credentials
npx adalo login

# start the development server
npx adalo dev
```

Now, when you add a component on Adalo, you will see a new tab called "development" with your component.
Changes to the code will hot reload the page **besides** changes to any `manifest.json`. If you make any changes
to `manifest.json`, you must restart your component.

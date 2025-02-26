---
id: testing
title: Testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Not only is it important that you write your component to be cross-platform, you must also test your component on all platforms.

If you are trying to test a library after you've published it, check out [managing public libraries](/docs/workflow/managing-public-libraries).

<Tabs
defaultValue="web"
values={[
{label: 'Web', value: 'web'}
]}>
<TabItem value="web">

## Web

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
</TabItem>
</Tabs>

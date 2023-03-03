---
id: publishing
title: Publishing
---

Publishing your awesome new Library to Adalo is very simple! Simply run the `publish` command while in the root of your Library directory:

```bash
npx @adalo/cli publish
```

## Requirements

Must have

- "name" property
- "author" property
- "description" property
- "version" property
- "adalo" unique property

Additionally, public components must have

- "supportURL" property
- "requiresThirdPartySubscription" property

And paid components must have

- "demoURL" property
- "price" property

See [package.json](/docs/configuration/package-json) and [adalo.json](/docs/configuration/adalo-json) for more information on these properties.

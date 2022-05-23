---
id: update-listing
title: Update Your Library Listing
---

All information about your library is stored in the `adalo.json` file. See the [adalo.json documentation](/docs/configuration/adalo-json) for more information about what the file supports.

:::note
If you created your library before March of 2022, you can generate this file by updating to the latest version of the CLI, and running either `npx adalo update` or `npx adalo publish`.
:::

From here, tweak whatever you need to, and then run `npx adalo update` to update your library listing.

Here's what can be changed by this command:

- `displayName`
- `description`
- `logo` (The image will get re-uploaded every time you run the command)
- `author`
- `supportURL`
- `price` (This only applies to paid libraries)
- `demoURL`
- `requiresThirdPartySubscription`
- `details`

Here's what's stored in the `adalo.json` file, but is updated when you publish a new version of your library:

- `components`
- `iosInstallScript`
- `androidInstallScript`
- `webpackConfig`

---
id: adalo-json
title: adalo.json
---

:::note
This is a new feature, so make sure to upgrade to the latest version of the CLI to use it.
:::

The `adalo.json` file used to define information about your library. Every libraries `adalo.json` file should contain the following information:

- `displayName`
- `author`
- `description`
- `logo`
- `supportURL`
- `requiresThirdPartySubscription`
- `components`

Additionally, all paid libraries should also contain the following:

- `price`
- `demoAppURL`

You can also include the following optional fields:

- `details`
- `iosInstallScript`
- `androidInstallScript`
- `webpackConfig`

For more information on each of these fields, see the [adalo.json documentation](/docs/configuration/adalo-json)

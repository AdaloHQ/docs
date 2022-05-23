---
id: exporting-data
title: Exporting Data
---

There are 3 main ways to export data from your component to the rest of the Adalo ecosystem. These are `component data`, `action arguments`, and `autosaveInput`. When exporting data from your component, you should use the method that makes the most sense for your use case.

## Autosave Input

The `autosaveInput` role allows your component to directly modify values in the database.

For more info on `autosaveInput`, see [Modifying Values in the Database](/docs/interactions/modifying-database-values).

## Component Data

Component data allows props from your component to be accessed via magic text in other components, as well as your own. This should be considered the default method for exporting data and should be used any whenever you don't need to directly modify a database value or

For more info on component data, see the [Component Data](/docs/interactions/component-data) docs.

## Action Arguments

Action arguments are very similar to component data, they allow you to use information from your component within an action **in your component only**. One instance where this is useful is when you want to use information from your component in an action, but don't want to share that information across the entire Adalo ecosystem.

For more info on action arguments, see the [Actions](/docs/interactions/actions) docs.

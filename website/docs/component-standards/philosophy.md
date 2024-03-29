---
id: philosophy
title: Philosophy
---

When brainstorming a new component to create, make sure that your idea falls within Adalo's definition of a component and that it follows the core design principles.

## What is a component? (And what is not)

A component is a functional unit within Adalo. They are capable of executing their own logic based on properties given to it by the app, as outlined by the component.

Components must:

- Have a visual element
- In the vast majority of use cases, have some way for the user to interact with the component.

## Design Principles

At its core, every single component must follow these four main design principles by being: Single-Purpose, Cross-Platform, Configurable, and Universal.

### Single-Purpose

Each Adalo Library should strive to solve one particular use case, and solve it well. Don’t be a jack of all trades. Be the master of one.

Examples:

- ✅ A video player component
- ❌ A component that plays video or audio files

### Cross-Platform

Adalo components are built in React Native, and that means it’s easy to build for iOS, Android, and Web! Adalo’s users expect components to work consistently across all three platforms, and as developers, we should strive to honor this.

- Some behaviors and styles can be platform specific if those are behaviors that are native to those platforms.
- The same functionality support should exist across all three platforms.
- It is your responsibility to test components on all three platforms and ensure they work properly. We will test this during the review process.

Examples:

- ✅ Google maps component that works on Android, iOS, and Web
- ✅ Maps component that uses Mapbox for Web, Google Maps on Android, and Apple Maps on iOS
- ❌ Web-only mapbox component that cannot be used on other platforms

### Configurable

Components should strive to be highly configurable & general purpose to allow for maximum flexibility in a variety of different use cases.

- Styles elements such as color, borders, padding, and font size & weight should be customizable
- Colors should default to the apps branding colors
- Dates & Numbers should be customizable
- Users should be able to add actions to any interaction with your component
- If you’re component is “feature-rich,” give users the ability to disable the features that aren’t strictly necessary

Examples:

- ✅ Slider with colors, minimum, maximum, and step controls
- ❌ Pre-styled slider that allows users to select values from 1-5

### Universal

Adalo app creators and their users live in all parts of the world and all components should work regardless of someone’s location.

- All text should be configurable and not hard-coded
- Components should support customization for other international standards such as dates and currencies.
- Components should be accessible to all users

Examples:

- ✅ A calendar component that lets users specify a language and first day of the week
- ❌ An english calendar that starts on Sundays

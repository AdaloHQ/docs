---
id: manifest-json
title: manifest.json
---

There are several more specific standards having to do with manifest that all Adalo components must follow:

- Labels and help text should be as concise as possible and be written in grammatically correct English.
- Sliders should be used for any numeric input that shouldn't give access to dynamic text, such as styling properties. See the [control types](/docs/interactions/control-types) for an explanation of how to implement the slider.
- Make sure to use the enabled property correctly. If you're attempting to allow the user to disable/enable a whole child component, make sure to use the correct standalone `enabled` reserved prop. See [conditional control](/docs/interactions/conditional-control) for more information.
- **Internationalization**. This one's super important. Many of Adalo's users are not based in America, and so every component must be international friendly. This means two things:
  - Make component interactions international-friendly. For example, the Calendar component supports both 12-hour time and 24-hour time, as well as the option to change the first day of the week between Sunday or Monday.
  - Make all text configurable. This can be done in two different ways:
    - Having a prop for every piece of text in your component. If there's a button with text, there should be a "buttonText" prop.
    - Adding a prop to select a specific language. For example, in the Calendar it would be a lot of work to have text props for every single day of the week and every month, so instead the calendar has a dropdown called "Language" which has support for many languages. These are hard-coded as various locale sets in the component's code.
- Use an App's branding for color defaults when possible. See [colors and branding](/docs/design/colors-branding) for an in-depth explanation.
- Help text should only be used when the display name of the prop can't contain all of the information for the prop.

This list may grow organically over time.

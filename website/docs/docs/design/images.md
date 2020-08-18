---
id: images
title: Images
---

Sometimes, instead of rendering certain parts of your component in the editor, you may want to just render a placeholder image. For example, the maps component renders a static placeholder image instead of the actual maps component in the editor.

Currently there's an issue with using React Native's `Image` component with statically linked images, so you'll have to use React's `<img>` tag.

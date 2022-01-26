---
id: sharing
title: Sharing Private Libraries
---

Given your access token and the access token of another developer, you can share any of your private libraries with a simple POST request.

Here's what you need to do:

1. Retrieve your access token and the access token of the developer you want to share the library with. You can see this in the "Shared With Me" tab of the developers panel:
   <img src="/img/access-token.png" alt="Shared with me explanation" style={{minWidth: 750}}/>
2. Find the ID of the library you want to share. The easiest way to do this is to use the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en), and inspect the library from the developers panel that you'd like to share. Under "props", search for the library, and then it's id.
3. Make a POST request to `https://component-registry.herokuapp.com/api/libraries/:LibraryId/share`, where `:LibraryId` is your library's id. Make sure to add these two extra bits of information:
   - Include your access token as a header with the key `x-proton-auth`.
   - Include the access token of the developer you want to share the library with in the request body as a JSON object with key `accessToken`.
4. Now, that developer should be able to see your library under their "Shared With Me" page.

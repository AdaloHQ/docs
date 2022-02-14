---
id: managing-private-libraries
title: Managing Private Libraries
---

When you publish a library, you have the option to make it public or private.

<img src="/img/library-configuration.png" style={{maxWidth: 300 }}/>

Publishing a public component immediately adds it to the "Under Review" tab of the editor for everyone on your team.

## Adding a Private Component to a Team

To make a private component available to your team, click on the profile icon in the top right corner of your screen, and select "Developers" from the dropdown menu.

<img src="/img/user-dropdown.png" style={{maxWidth: 300 }} />

Now you will see a modal screen containing all of your libraries. Find the library you want to add to your team, then select the icon on the right hand side. Then hover over the "Add To" option to see all of your teams, and select the one you would like to have access to this library.

<img src="/img/add-team.png" style={{maxWidth: 400 }} />

Now the component should be available to everyone on your team under the "Private" tab in the editor.

<img src="/img/editor-private.png" style={{maxWidth: 300 }} />

## Removing a Private Component from a Team

To remove a private component from a team, just go back to the "Developers" tab and find the library you want to remove. Then click the right hand icon again, hover over the "Remove From" option, and select the team you want to remove this library from.

<img src="/img/remove-team.png" style={{maxWidth: 400 }} />

## Sharing Private Libraries with Other Developers

Given your access token and the access token of another developer, you can share any of your private libraries with a simple POST request.

Here's what you need to do:

1. Retrieve your access token and the access token of the developer you want to share the library with. You can see this in the "Shared With Me" tab of the developers panel:
   <img src="/img/access-token.png" alt="Shared with me explanation" style={{minWidth: 750}}/>
2. Find the ID of the library you want to share. The easiest way to do this is to use the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en), and inspect the library from the developers panel that you'd like to share. Under "props", search for the library, and then it's id.
3. Make a POST request to `https://component-registry.herokuapp.com/api/libraries/:LibraryId/share`, where `:LibraryId` is your library's id. Make sure to add these two extra bits of information:
   - Include your access token as a header with the key `x-proton-auth`.
   - Include the access token of the developer you want to share the library with in the request body as a JSON object with key `accessToken`.
4. Now, that developer should be able to see your library under their "Shared With Me" page.

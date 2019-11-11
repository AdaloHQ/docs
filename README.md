# Adalo Docs
Documentation for creating Adalo libraries

## Creating Libraries

Libraries in Adalo are simply react native (and [react native web](https://github.com/necolas/react-native-web) packages, with a couple of additional additions.

### package.json

In `package.json` you need to add an additional section called `"adalo"` that will look something like this:

```js
{
  "name": "my-package",
  "version": "0.0.1",
  "dependencies": { ... },
  "adalo": {
    "displayName": "My Package",
    "components": [
      {
        // "name" must match the exported name from your module.
        // i.e. if you `import { FirstComponent } from 'my-package'` then you would put:
        "name": "FirstCompnent",

        // "manifest" is the relative path to the manifest.json file, relative to package.json
        "manifest": "./src/FirstComponent/manifest.json"
      },
      {
        "name": "Second Component",
        "manifest": "./src/SecondComponent/manifest.json"
      }
    ]
  }
}
```

### Component Manifests

`manifest.json` is a file that must accompany every exported component. You define which props will be available in the UI when using your component in Adalo.

See the [Component Manifest Documentation](https://github.com/AdaloHQ/docs/blob/master/libraries/Manifests.md) to learn what to put inside your manifest.json file.


## Testing Locally

In order to test your package locally, you need to add a package dependency to your project:

```
npm install --save @protonapp/proton-cli
```

or:

```
yarn add @protonapp/proton-cli
```

Then, to run the package locally, to make it accessible in Adalo, run:

```
npx proton dev
```

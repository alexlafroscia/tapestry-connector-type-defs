# tapestry-type-defs

This repo provides TypeScript type definitions for the [Tapestry Connector API](https://github.com/TheIconfactory/Tapestry/blob/main/Documentation/API.md). Please note that these are in no way official, accurate or up-to-date; I built them to learn their API and help myself tinker with building out Connectors. Use at your own risk!

## Usage

After installing this package with your dependency manager of choice (once it has been published to NPM), you an annotate your `plugin.js` file like this:

```diff
+ /**
+  * @type {import("@alexlafroscia/tapestry-type-defs").Load}
+  */
function load() {
    // Your `load` contents
}
```

This will define the type of your `Load` function, and import global types for all of the classes, functions and variabels that are available in the Tapestry Connector environment.

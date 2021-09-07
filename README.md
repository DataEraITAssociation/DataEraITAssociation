# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

We use this module to deploy the project directly:
https://www.npmjs.com/package/gh-pages

```console
yarn build

yarn gh
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

This command will ask for user name and password which you require a Personal access tokens in https://github.com/settings/tokens .

This token could be expired for a few weeks.

If gh-pages fails, you may find that you need to manually clean up the cache directory. To remove the cache directory, run node_modules/gh-pages/bin/gh-pages-clean or remove node_modules/.cache/gh-pages.

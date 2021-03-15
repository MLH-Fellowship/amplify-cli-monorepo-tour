# Amplify CLI Monorepo Tour

The Amplify Command Line Interface (CLI) monorepo tour is a guide for software developers by software developers. This guide aims to help new Amazon engineers and the huge awesome community of open source contributors to get started with the development and improvement of the Amplify CLI.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

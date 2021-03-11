# Amplify CLI

The Amplify Command Line Interface (CLI) monorepo tour is a guide for software developers by software developers. This guide aims to help new Amazon engineers and the huge awesome community of open source contributors to get started with the development and improvement of the Amplify CLI.

The goal and objective of this guide is to reduce the time taken to get familiar with the code, architecture and configuration of the large number of packages in the Amplify CLI monorepo by explaining the magic happening under the hood when you run a Amplify CLI command on your terminal.

## Pre-requisites

This guide assumes that you have followed the [local environment setup instructions](https://github.com/aws-amplify/amplify-cli/blob/master/CONTRIBUTING.md#local-environment-setup) and you are ready with an instance of `amplify-dev`.

To verify run `amplify-dev --version` in your terminal.

Now open the `amplify-cli` project in your favourite IDE.

## Structure

The Amplify CLI monorepo (multi-package repositories) has the following top level structure. This strucutre excludes common configuration files like `.gitignore`, markdown files and files under `files.exclude` in your project's `.vscode/settings.json` so that we can focus on the main parts.

```
├── .circleci
├── codecov.yml
├── commitlint.config.js
├── cypress
├── lerna.json
├── .lgtm.yml
├── package.json
├── packages
├── pkg
├── scripts
├── tsconfig.base.json
```

Let us explore the contents of the directories to understand different parts of the Amplify CLI.

### Continuous Integration

Amplify CLI uses [CircleCi](https://circleci.com) to automate the development process with continuous integration in their cloud.

Now go to the `.circleci` directory in your project.

You will see the following structure.

```
├── amplify_init.exp
├── amplify_init.sh
├── api.sh
├── auth.sh
├── aws_configure.exp
├── aws.sh
├── config.base.yml
├── config.yml
├── delete_api.exp
├── delete_api.sh
├── delete_auth.exp
├── delete_auth.sh
├── enable_api.exp
├── enable_auth.exp
├── local_publish_helpers.sh
└── verdaccio.yaml
```

This is a collection of `.sh` (shell scripts), `.exp` (expect scripts) and configuration files for circleci and Verdaccio (a simple, zero-config-required local private npm registry). Verdaccio uplinks the npmjs registry in the `verdaccio.yaml` file so that we can fetch packages from multiple sources in one single project.

#### Expect and Shell scripts

- Expect scripts talk with interactive programs or scripts that require user interaction.

- It works by expecting input, then the Expect script will send the response without any user interaction with the help of the following commands.

```
spawn 	 Starts a script or a program.
expect 	 Waits for program output.
send 	 Sends a reply to your program.
interact Allows you to interact with your program.
```
Example

- Go to `amplify_init.exp` script and observe line 3 - `spawn ./.circleci/amplify_init.sh $repo`. 

- All expect scripts in the folder follow a similar pattern of using `spawn` command to run the `.sh` scripts in the folder.

- Then `expect` and `send` commands are used in combination in the expect script.

Now open the `config.base.yml` file.


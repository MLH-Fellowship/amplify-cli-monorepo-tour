---
id: amplify-env
title: amplify env
sidebar_label: amplify env
slug: /amplify-cli/amplify-env
---

Amplify CLI supports creating multiple backend environments. Each Amplify backend environment is a container for the categories added to your project. You can find more information about multi-environment feature [here](https://docs.amplify.aws/cli/teams/overview).

The code for multi-environment resides in the `packages/amplify-cli/src/commands/env` directory. It has the following files for each command -

```
├── add.ts
├── checkout.ts
├── get.ts
├── import.ts
├── list.ts
├── pull.ts
└── remove.ts
```

The code in these files mostly uses functions defined in the `context` object. Following is the overview of what each file is responsible for and how it works.

### `add.ts`

- Used for `amplify env add`, which is essentially `amplify init`. So, this file just calls the `init` function.

### `checkout.ts`

- Used for `amplify env checkout <envname>`.
- It first checks the input to make sure a valid environment name has been passed. The `context` object is used to get the list of all available environment (`context.amplify.getEnvDetails()`).
- Then, it uses the `stateManager` from `amplify-cli-core` to set the current environment to the environment name provided.
- Once that is done, it sets up the `context` object to reflect the new environment.
- Finally, it initializes each `providerModule` with the settings for new environment.

### `get.ts`

- Used for `amplify env get <envname>`, through which you can list all details for `<envname>` environment. Details include the AWS Region, IAM roles, S3 bucket and stack information.
- It gets a list of environments using `getEnvDetails()` and performs a search for the input `<envname>`. If found, it uses the `printEnvInfo` function found in `packages/amplify-cli/src/commands/helpers/envUtils.ts`.

### `import.ts`

- Used for `amplify env import <envname>`, through which you can import an existing environment from the cloud.
- It parses the input command, and checks if the config provided by the environment is valid.
- Then, it uses the `getLocalAWSInfo` function defined in `stateManager` to actually fetch the specified environment.
- Finally, it adds the fetched environment to the current context.

### `list.ts`

- Used for `amplify env list`, through which you list all existing environments currently available.
- The `getEnvDetails` function from current `context` object is used to get the list of all available environment (`context.amplify.getEnvDetails()`).
- After that, it formats and prints the data to the console.

### `pull.ts`

- Used for `amplify env pull <envname>`, through which you can pull the current environment from the cloud. If the `--restore` flag is specified, it will overwrite any local changes.
- The inner workings of this are similar to the `import` command. It uses the `context` object's `constructExeInfo` function to fetch the latest changes to the current environment from the cloud, and then re-initializes the current environment based on the fetched data.

### `remove.ts`

- Used for `amplify env remove <envname>`, through which you can remove both the local and the cloud environments, including all provisioned services and resources.
- First, it checks whether the envname provided is a valid one. Next, it asks for confirmation from the user through the `getConfirmation()` function.
- Finally, it uses the `removeFromCloud()` function from `context` to delete resources through CloudFormation and uses `stateManager.setLocalAWSInfo` to remove the environment locally.

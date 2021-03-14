---
id: commands
title: Amplify Mock Commands
sidebar_label: Commands
slug: /amplify-util-mock/commands
---

:::caution Pre-requisite 
Java is required on your development workstation to use Local Mocking in Amplify
:::

## Which package is used?

If you go into the `$HOME_DIR/.amplify/plugins.json` file (where `$HOME_DIR` is your home directory), which lists all the plugins available on your system, you might notice the following lines at the end:

```json {3}
"mock": [
      {
        "packageName": "amplify-util-mock",
        "packageVersion": "3.27.7",
        "packageLocation": "$HOME_DIR/.config/yarn/global/node_modules/amplify-util-mock",
        "manifest": {
          "name": "mock",
          "type": "util",
          "commands": [
            "api",
            "function",
            "mock",
            "storage",
            "help"
          ],
          "eventHandlers": []
        }
      }
    ]

```

This indicates that the `amplify-util-mock` package is used when we invoke mocking commands.

## What commands are available?

As per the above JSON property, we can infer that the following commands are available for invocation:

```bash
# To mock the AWS AppSync API
amplify mock api

# To mock AWS Lambda Functions
amplify mock function

# To mock all available local resources
amplify mock

# To mock storage solutions (Amazon S3 or Amazon DynamoDB)
amplify mock storage

# Help!
amplify mock help
```
## Folder Structure

```bash {2}
# /amplify-util-mock/src

├── amplify-plugin-index.ts
├── api
├── CFNParser
├── commands
├── __e2e__
├── func
├── index.ts
├── mockAll.ts
├── storage
├── __tests__
└── utils
```
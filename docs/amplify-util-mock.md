---
id: amplify-util-mock
title: Amplify CLI Mocking
sidebar_label: Introduction
slug: /amplify-util-mock/
---

## What is mocking?

Mocking is a process of simulating cloud resources offline for local development. While developing a full-stack application using Amplify Framework, sometimes developers are in the need of the following:

- Prototyping changes locally
- Committing and pushing to the cloud resources
- Mocking/testing/debugging the updates
- Returning to step 1 if there are any fixes to incorporate

**The above loop can be a tedious one, and tedious processes make unhappy developers.**

### The solution?

In order to optimize and streamline the feedback loop between local and cloud resources earlier in the development process, `amplify-util-mock` provides the following functionalities for local development:

- NoSQL data access via a robust GraphQL API
- Serverless functions triggered for customized business logic from any GraphQL type or operation
- Developer tooling, including a GraphiQL IDE fully pre-integrated with open-source plugins such as those from OneGraph, customized for your AppSync API
- Simulated object storage
- Instantaneous feedback on changes
- Debugging GraphQL resolver mapping templates written in Velocity Template Language (VTL)
- Ability to use custom directives and code generation with the GraphQL Transformer
- Ability to mock JWT tokens from Amazon Cognito User Pools to test authorization rules locally
- Work with web and mobile platforms (iOS and Android)
- **And, the ability to work _offline_**

:::important Benefits
As a developer using Amplify, you’ll immediately see the changes you make locally to your application, speeding up your development process and removing interruptions to your workflow. No waiting for cloud services to be deployed – just develop, test, debug, model your queries, and generate code locally until you’re happy with your product, then deploy your changes to the scalable, highly available backend services in the cloud as you’ve always done.
:::

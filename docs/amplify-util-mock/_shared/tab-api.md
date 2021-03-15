```bash {2}
# amplify-util-mock/src/api

├── api.ts
├── index.ts
├── lambda-arn-to-config.ts
├── resolver-overrides.ts
└── run-graphql-transformer.ts
```

**Files:**

1. `api.ts` : It exposes a class called **`APITest`** responsible for starting the Local AppSync simulator, as well as starting the GraphQL transformer. It also starts a local DynamoDB server which uses SQLite.
2. `index.ts` : It exposes the global `start()` function which is called when `amplify mock api` is executed.
3. `lambda-arn-to-config.ts` : Attempts to match an arn object against the array of lambdas configured in the project.
4. `run-graphql-transformer.ts` : Executes the GraphQL transformer from the **`$TSContext`** object.

```bash {2}
# amplify-util-mock/src/commands/mock

├── api.ts
├── function.ts
├── help.ts
├── mock.ts
└── storage.ts
```

This folder exposes a `run()` for each function which is called by `amplify mock <command>`.

**Files:**

1. `api.ts` : For `amplify mock api`
2. `fucntion.ts` : For `amplify mock function <functionName>`
3. `help.ts` : For `amplify mock help`
4. `mock.ts` : For `amplify mock`
5. `storage.ts` : For `amplify mock storage`

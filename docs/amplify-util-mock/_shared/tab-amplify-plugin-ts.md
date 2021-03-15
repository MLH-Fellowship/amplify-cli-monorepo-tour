```javascript {6}
export async function executeAmplifyCommand(context: any) {
  const commandPath = path.normalize(
    path.join(__dirname, "commands", pluginName, context.input.command)
  );
  const commandModule = await import(commandPath);
  await commandModule.run(context);
}
```

The `executeAmplifyCommand` determines the sub-command and calls the `run()` function in the appropriate file located in the `commands/mock` directory.

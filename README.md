# vitest-workspace-demo

## Getting Started

```
npm i
npm test
```

Vitest has read the `vite.config.ts` file under each projects. However, these configuration files did not take effect due to test error `ReferenceError: __DEV__ is not defined` is thrown.

Running vitest separately under each project is ok.

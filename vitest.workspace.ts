import { defineWorkspace } from "vitest/config";

// export default defineWorkspace(["*/vite.config.ts"]);

export default defineWorkspace([
  {
    extends: "./a/vite.config.ts",
    test: {
      name: "a",
      root: "./a",
    },
  },
  {
    extends: "./b/vite.config.ts",
    test: {
      name: "b",
      root: "./b",
    },
  },
]);

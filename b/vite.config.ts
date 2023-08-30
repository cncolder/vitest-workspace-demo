import { defineConfig } from "vite";

console.log(__dirname);

export default defineConfig({
  define: {
    __DEV__: JSON.stringify(true),
  },
});

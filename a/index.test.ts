import { test, expect } from "vitest";

test("a", () => {
  expect(__DEV__).toBe(true);
});

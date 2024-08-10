import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";

describe("242", () => {
  const tests: TestCases<[string, string], boolean> = [
    {
      args: ["anagram", "naagram"],
      want: true,
    },
    {
      args: ["aacc", "ccac"],
      want: false,
    },
    {
      args: ["rat", "car"],
      want: false,
    },
  ];

  for (let t of tests) {
    test("should pass", () => {
      const result = testing(...t.args);
      expect(result).toStrictEqual(t.want);
    });
  }
});

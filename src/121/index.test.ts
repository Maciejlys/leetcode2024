import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";

describe("121", () => {
  const tests: TestCases<[number[]], number> = [
    {
      args: [[7, 1, 5, 3, 6, 4]],
      want: 5,
    },
    {
      args: [[7, 6, 4, 3, 1]],
      want: 0,
    },
  ];

  for (let t of tests) {
    test("should pass", () => {
      expect(testing(...t.args)).toStrictEqual(t.want);
    });
  }
});

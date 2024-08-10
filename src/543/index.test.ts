import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode, arrToTree } from "../utils/TreeNode";

describe("543", () => {
  const tests: TestCases<[TreeNode | null], number> = [
    {
      args: [arrToTree([1, 2, 3, 4, 5])],
      want: 3,
    },

    {
      args: [arrToTree([1, 2])],
      want: 1,
    },
  ];

  for (let t of tests) {
    test("should pass", () => {
      expect(testing(...t.args)).toStrictEqual(t.want);
    });
  }
});

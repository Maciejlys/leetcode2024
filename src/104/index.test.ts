import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode, arrToTree } from "../utils/TreeNode";

describe("104", () => {
  const tests: TestCases<[TreeNode], number> = [
    {
      args: [arrToTree([3, 9, 20, null, null, 15, 7])],
      want: 3,
    },

    {
      args: [arrToTree([1, null, 2])],
      want: 2,
    },
  ];

  for (let t of tests) {
    test("should pass", () => {
      expect(testing(...t.args)).toStrictEqual(t.want);
    });
  }
});

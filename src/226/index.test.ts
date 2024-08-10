import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode, arrToTree } from "../utils/TreeNode";

describe("226", () => {
  const tests: TestCases<[TreeNode | null], TreeNode | null> = [
    {
      args: [arrToTree([4, 2, 7, 1, 3, 6, 9])],
      want: arrToTree([4, 7, 2, 9, 6, 3, 1]),
    },

    {
      args: [null],
      want: null,
    },

    {
      args: [arrToTree([2, 1, 3])],
      want: arrToTree([2, 3, 1]),
    },
  ];

  for (let t of tests) {
    test("should pass", () => {
      expect(testing(...t.args)).toStrictEqual(t.want);
    });
  }
});

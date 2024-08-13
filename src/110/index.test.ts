import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode, arrToTree } from "../utils/TreeNode";

describe("110", () => {
  const tests: TestCases<[TreeNode], boolean> = [
    {
      args: [arrToTree([3, 9, 20, null, null, 15, 7])],
      want: true,
    },
  ];

  for (let t of tests) {
    test("should pass", () => {
      expect(testing(...t.args)).toStrictEqual(t.want);
    });
  }
});

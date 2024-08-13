import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode, arrToTree } from "../utils/TreeNode";

describe("100", () => {
    const tests: TestCases<[TreeNode | null, TreeNode | null], boolean> = [
        {
            args: [arrToTree([1, 2, 3]), arrToTree([1, 2, 3])],
            want: true,
        },

        {
            args: [arrToTree([1, 2]), arrToTree([1, null, 2])],
            want: false,
        },

        {
            args: [arrToTree([1, 2, 1]), arrToTree([1, 1, 2])],
            want: false,
        },
    ];

    for (let t of tests) {
        test("should pass", () => {
            expect(testing(...t.args)).toStrictEqual(t.want);
        });
    }
});

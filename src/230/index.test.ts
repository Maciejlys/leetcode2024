import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode, arrToTree } from "../utils/TreeNode";

describe("230", () => {
    const tests: TestCases<[TreeNode | null, number], number> = [
        {
            args: [arrToTree([3, 1, 7]), 1],
            want: 1,
        },

        {
            args: [arrToTree([8, 4, 12]), 2],
            want: 8,
        },
    ];

    for (let t of tests) {
        test("should pass", () => {
            expect(testing(...t.args)).toStrictEqual(t.want);
        });
    }
});

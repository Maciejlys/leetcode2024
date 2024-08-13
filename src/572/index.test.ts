import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode, arrToTree } from "../utils/TreeNode";

describe("572", () => {
    const tests: TestCases<[TreeNode | null, TreeNode | null], boolean> = [
        {
            args: [arrToTree([3, 4, 5, 1, 2]), arrToTree([4, 1, 2])],
            want: true,
        },
        {
            args: [
                arrToTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
                arrToTree([4, 1, 2]),
            ],
            want: false,
        },
    ];

    for (let t of tests) {
        test("should pass", () => {
            expect(testing(...t.args)).toStrictEqual(t.want);
        });
    }
});

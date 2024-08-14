import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode, arrToTree } from "../utils/TreeNode";

describe("199", () => {
    const tests: TestCases<[TreeNode | null], number[]> = [
        {
            args: [arrToTree([1, 2, 3])],
            want: [1, 3],
        },
        {
            args: [
                new TreeNode(
                    1,
                    new TreeNode(2, new TreeNode(8, new TreeNode(9, new TreeNode(10)))),
                    new TreeNode(3, new TreeNode(4, new TreeNode(6)), new TreeNode(5)),
                ),
            ],

            want: [1, 3, 5, 6, 10],
        },
    ];

    for (let t of tests) {
        test("should pass", () => {
            expect(testing(...t.args)).toStrictEqual(t.want);
        });
    }
});

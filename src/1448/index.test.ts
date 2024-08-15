import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode } from "../utils/TreeNode";

describe("1448", () => {
    const tests: TestCases<[TreeNode], number> = [
        {
            args: [
                new TreeNode(
                    5,
                    new TreeNode(2, new TreeNode(8, new TreeNode(9, new TreeNode(10)))),
                    new TreeNode(7, new TreeNode(4, new TreeNode(6)), new TreeNode(5)),
                ),
            ],

            want: 5,
        },

        {
            args: [
                new TreeNode(
                    5,
                    new TreeNode(11, new TreeNode(8, new TreeNode(9, new TreeNode(10)))),
                    new TreeNode(7, new TreeNode(4, new TreeNode(6)), new TreeNode(5)),
                ),
            ],

            want: 3,
        },
    ];

    for (let t of tests) {
        test("should pass", () => {
            expect(testing(...t.args)).toStrictEqual(t.want);
        });
    }
});

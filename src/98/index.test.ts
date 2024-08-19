import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";
import { TreeNode } from "../utils/TreeNode";

describe("98", () => {
    const tests: TestCases<[TreeNode], boolean> = [
        {
            args: [new TreeNode(2, new TreeNode(1), new TreeNode(3))],
            want: true,
        },

        {
            args: [new TreeNode(5, new TreeNode(1), new TreeNode(4))],
            want: false,
        },

        {
            args: [new TreeNode(1, new TreeNode(1), new TreeNode(1))],
            want: false,
        },

        {
            args: [new TreeNode(1, new TreeNode(1))],
            want: false,
        },

        {
            args: [new TreeNode(1, null, new TreeNode(1))],
            want: false,
        },
    ];

    for (let t of tests) {
        test("should pass", () => {
            expect(testing(...t.args)).toStrictEqual(t.want);
        });
    }
});

import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";

describe("78", () => {
    const tests: TestCases<[number[]], number[][]> = [
        {
            args: [[0]],
            want: [[], [0]],
        },
    ];

    for (let t of tests) {
        test("should pass", () => {
            expect(testing(...t.args)).toStrictEqual(t.want);
        });
    }
});

import { describe, expect, test } from "vitest";
import testing from ".";
import { TestCases } from "../types/testCases";

describe("287", () => {
    const tests: TestCases<[number[]], number> = [
        {
            args: [[1, 3, 4, 2, 2]],
            want: 2,
        },
        {
            args: [[3, 1, 3, 4, 2]],
            want: 3,
        },
        {
            args: [[3, 3, 3, 3, 3]],
            want: 3,
        },
    ];

    for (let t of tests) {
        test("should pass", () => {
            const result = testing(...t.args);
            expect(result).toStrictEqual(t.want);
        });
    }
});

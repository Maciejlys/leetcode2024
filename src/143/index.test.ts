import { describe, expect, test } from "vitest";
import testing from ".";
import { arrToList } from "../utils/ListNode";

describe("143", () => {
    test("should pass", () => {
        const input = arrToList([1, 2, 3, 4]);
        const output = arrToList([1, 4, 2, 3]);

        testing(input);

        expect(input).toStrictEqual(output);
    });
    test("should pass", () => {
        const input = arrToList([1, 2, 3, 4, 5]);
        const output = arrToList([1, 5, 2, 4, 3]);

        testing(input);

        expect(input).toStrictEqual(output);
    });
});

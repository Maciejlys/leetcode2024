import { describe, expect, test } from "vitest";
import testing from ".";
import { arrToList } from "../utils/ListNode";

describe("141", () => {
    test("should pass", () => {
        const head = [3, 2, 0, -4];
        const output = true;
        const list = arrToList(head);

        if (list?.next?.next?.next?.next === null) {
            list.next.next.next.next = list.next;
        }
        const result = testing(list);

        expect(result).toStrictEqual(output);
    });
    test("should pass", () => {
        const head = [1, 2];
        const output = true;
        const list = arrToList(head);

        if (list?.next?.next === null) {
            list.next.next = list;
        }

        const result = testing(list);

        expect(result).toStrictEqual(output);
    });
    test("should pass", () => {
        const head = [1];
        const output = false;
        const list = arrToList(head);

        const result = testing(list);

        expect(result).toStrictEqual(output);
    });
    test("should pass", () => {
        const head = [
            -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20,
            14, 14, 2, 13, -24, 21, 23, -21, 5,
        ];
        const output = false;
        const list = arrToList(head);

        const result = testing(list);

        expect(result).toStrictEqual(output);
    });
});

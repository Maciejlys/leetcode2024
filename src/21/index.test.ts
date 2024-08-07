import { describe, expect, test } from "vitest";
import testing from ".";
import { ListNode, arrToList } from "../utils/ListNode";

describe("21", () => {
  test("should pass", () => {
    const arr1 = [1, 2, 4];
    const arr2 = [1, 3, 4];
    const output = [1, 1, 2, 3, 4, 4];

    const result = testing(arrToList(arr1), arrToList(arr2));

    expect(result).toStrictEqual(arrToList(output));
  });
  test("should pass", () => {
    const result = testing(null, null);

    expect(result).toStrictEqual(null);
  });
  test("should pass", () => {
    const result = testing(null, new ListNode(0, null));

    expect(result).toStrictEqual(new ListNode(0, null));
  });
});

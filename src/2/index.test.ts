import { describe, expect, test } from "vitest";
import testing from ".";
import { arrToList } from "../utils/ListNode";

describe("2", () => {
  test("should pass", () => {
    const l1 = [2, 4, 3],
      l2 = [5, 6, 4];
    const output = [7, 0, 8];

    const result = testing(arrToList(l1), arrToList(l2));

    expect(result).toStrictEqual(arrToList(output));
  });
  test("should pass", () => {
    const l1 = [0],
      l2 = [0];
    const output = [0];

    const result = testing(arrToList(l1), arrToList(l2));

    expect(result).toStrictEqual(arrToList(output));
  });
  test("should pass", () => {
    const l1 = [9, 9, 9, 9, 9, 9, 9],
      l2 = [9, 9, 9, 9];
    const output = [8, 9, 9, 9, 0, 0, 0, 1];

    const result = testing(arrToList(l1), arrToList(l2));

    expect(result).toStrictEqual(arrToList(output));
  });
});

import { describe, expect, test } from "vitest";
import testing from ".";
import { arrToList } from "../utils/ListNode";

describe("19", () => {
  test("should pass", () => {
    const input = [1, 2, 3, 4, 5],
      n = 2;
    const output = [1, 2, 3, 5];

    const result = testing(arrToList(input), n);

    expect(result).toStrictEqual(arrToList(output));
  });
  test("should pass", () => {
    const input = [1],
      n = 1;

    const result = testing(arrToList(input), n);

    expect(result).toStrictEqual(null);
  });
  test("should pass", () => {
    const input = [1, 2],
      n = 1;
    const output = [1];

    const result = testing(arrToList(input), n);

    expect(result).toStrictEqual(arrToList(output));
  });
  test("should pass", () => {
    const input = [1, 2],
      n = 2;
    const output = [2];

    const result = testing(arrToList(input), n);

    expect(result).toStrictEqual(arrToList(output));
  });
});

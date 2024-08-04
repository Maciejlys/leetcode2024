import { describe, expect, test } from "vitest";
import testing from ".";

describe("704", () => {
  test("should pass", () => {
    const nums = [-1, 0, 3, 5, 9, 12],
      target = 9;
    const output = 4;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const nums = [-1, 0, 3, 5, 9, 12],
      target = 2;
    const output = -1;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
});

import { describe, expect, test } from "vitest";
import testing from ".";

describe("33", () => {
  test("should pass", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 0;
    const output = 4;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 3;
    const output = -1;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const nums = [1],
      target = 0;
    const output = -1;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const nums = [1],
      target = 1;
    const output = 0;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const nums = [1, 3],
      target = 3;
    const output = 1;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const nums = [1, 3],
      target = 1;
    const output = 0;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const nums = [1, 2, 3, 4, 5, 6],
      target = 4;
    const output = 3;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const nums = [4, 5, 6, 7, 8, 1, 2, 3],
      target = 8;
    const output = 4;

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
});

import { describe, expect, test } from "vitest";
import testing from ".";

describe("167", () => {
  test("should pass", () => {
    const numbers = [2, 7, 11, 15],
      target = 9;
    const output = [1, 2];

    const result = testing(numbers, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const numbers = [2, 3, 4],
      target = 6;
    const output = [1, 3];
    const result = testing(numbers, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const numbers = [-1, 0],
      target = -1;
    const output = [1, 2];

    const result = testing(numbers, target);

    expect(result).toStrictEqual(output);
  });
});

import { describe, expect, test } from "vitest";
import testing, { contains } from ".";

describe("74", () => {
  test("should pass", () => {
    const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      target = 3;
    const output = true;

    const result = testing(matrix, target);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      target = 13;
    const output = false;

    const result = testing(matrix, target);

    expect(result).toStrictEqual(output);
  });

  describe("contains", () => {
    test("should pass", () => {
      const input = [1, 2, 3];
      const output = false;

      const result = contains(input, 4);

      expect(result).toStrictEqual(output);
    });
    test("should pass", () => {
      const input = [1, 2, 3];
      const output = true;

      const result = contains(input, 1);

      expect(result).toStrictEqual(output);
    });
  });
});

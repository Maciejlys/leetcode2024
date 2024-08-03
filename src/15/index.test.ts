import { describe, expect, test } from "vitest";
import testing from ".";

describe("15", () => {
  test("should pass", () => {
    const input = [-1, 0, 1, 2, -1, -4];
    const output = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [0, 1, 1];
    const output: number[] = [];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [0, 0, 0];
    const output = [[0, 0, 0]];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [3, 0, -2, -1, 1, 2];
    const output = [
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, 0, 1],
    ];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
    const output = [
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

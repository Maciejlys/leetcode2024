import { describe, expect, test } from "vitest";
import testing from ".";

describe("123", () => {
  test("should pass", () => {
    const input = [100, 4, 200, 1, 3, 2];
    const output = 4;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    const output = 9;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

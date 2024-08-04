import { describe, expect, test } from "vitest";
import testing from ".";

describe("42", () => {
  test("should pass", () => {
    const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const output = 6;
    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [4, 2, 0, 3, 2, 5];
    const output = 9;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

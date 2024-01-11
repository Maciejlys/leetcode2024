import { describe, expect, test } from "vitest";
import testing from ".";

describe("22", () => {
  test("should pass", () => {
    const input = 3;
    const output = ["((()))", "(()())", "(())()", "()(())", "()()()"];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = 1;
    const output = ["()"];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

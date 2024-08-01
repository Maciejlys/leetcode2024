import { describe, expect, test } from "vitest";
import testing from ".";

describe("739", () => {
  test("should pass", () => {
    const input = [73, 74, 75, 71, 69, 72, 76, 73];
    const output = [1, 1, 4, 2, 1, 1, 0, 0];
    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [30, 40, 50, 60];
    const output = [1, 1, 1, 0];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [30, 60, 90];
    const output = [1, 1, 0];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

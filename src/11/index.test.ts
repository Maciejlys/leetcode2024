import { describe, expect, test } from "vitest";
import testing from ".";

describe("11", () => {
  test("should pass", () => {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const output = 49;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [1, 1];
    const output = 1;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

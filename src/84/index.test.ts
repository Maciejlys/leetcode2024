import { describe, expect, test } from "vitest";
import testing from ".";

describe("84", () => {
  test("should pass", () => {
    const input = [2, 1, 5, 6, 2, 3];
    const output = 10;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [2, 4];
    const output = 4;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [2, 1, 2];
    const output = 3;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

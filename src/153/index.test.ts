import { describe, expect, test } from "vitest";
import testing from ".";

describe("153", () => {
  test("should pass", () => {
    const input = [3, 4, 5, 1, 2];
    const output = 1;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [4, 5, 6, 7, 0, 1, 2];
    const output = 0;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [11, 13, 15, 17];
    const output = 11;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [3, 1, 2];
    const output = 1;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [2, 3, 4, 5, 1];
    const output = 1;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

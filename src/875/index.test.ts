import { describe, expect, test } from "vitest";
import testing from ".";

describe("875", () => {
  test("should pass", () => {
    const piles = [3, 6, 7, 11],
      h = 8;
    const output = 4;

    const result = testing(piles, h);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const piles = [30, 11, 23, 4, 20],
      h = 5;
    const output = 30;

    const result = testing(piles, h);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const piles = [30, 11, 23, 4, 20],
      h = 6;
    const output = 23;

    const result = testing(piles, h);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const piles = [312884470],
      h = 312884469;
    const output = 2;

    const result = testing(piles, h);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const piles = [1, 1, 1, 999999999],
      h = 10;
    const output = 142857143;

    const result = testing(piles, h);

    expect(result).toStrictEqual(output);
  });
});

import { describe, expect, test } from "vitest";
import testing from ".";

describe("853", () => {
  test("should pass", () => {
    const target = 12,
      position = [10, 8, 0, 5, 3],
      speed = [2, 4, 1, 1, 3];
    const output = 3;

    const result = testing(target, position, speed);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const target = 10,
      position = [3],
      speed = [3];
    const output = 1;

    const result = testing(target, position, speed);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const target = 100,
      position = [0, 2, 4],
      speed = [4, 2, 1];
    const output = 1;

    const result = testing(target, position, speed);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const target = 10,
      position = [0, 4, 2],
      speed = [2, 1, 3];
    const output = 1;

    const result = testing(target, position, speed);

    expect(result).toStrictEqual(output);
  });
});

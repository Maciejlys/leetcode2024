import { describe, expect, test } from "vitest";
import testing from ".";

describe("20", () => {
  test("should pass", () => {
    const input = "()";
    const output = true;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = "()[]{}";
    const output = true;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = "(]";
    const output = false;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = "([)]";
    const output = false;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

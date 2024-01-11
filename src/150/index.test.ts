import { describe, expect, test } from "vitest";
import testing from ".";

describe("150", () => {
  test("should pass", () => {
    const input = ["2", "1", "+", "3", "*"];
    const output = 9;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = ["4", "13", "5", "/", "+"];
    const output = 6;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ];
    const output = 22;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

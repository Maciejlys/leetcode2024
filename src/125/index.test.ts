import { describe, expect, test } from "vitest";
import testing from ".";

describe("125", () => {
  test("should pass", () => {
    const input = "A man, a plan, a canal: Panama";
    const output = true;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = "race a car";
    const output = false;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = " ";
    const output = true;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

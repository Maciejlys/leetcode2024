import { describe, expect, test } from "vitest";
import testing from ".";

function arraysEqualIgnoringOrder(a: string[][], b: string[][]) {
  if (a.length !== b.length) return false;

  a = a.map((arr) => arr.slice().sort());
  b = b.map((arr) => arr.slice().sort());

  a.sort((x, y) => x.toString().localeCompare(y.toString()));
  b.sort((x, y) => x.toString().localeCompare(y.toString()));

  for (let i = 0; i < a.length; i++) {
    if (a[i].toString() !== b[i].toString()) return false;
  }

  return true;
}

describe("49", () => {
  test("should pass", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
    const result = testing(input);
    expect(arraysEqualIgnoringOrder(result, output)).toBeTruthy();
  });
  test("should pass", () => {
    const input = [""];
    const output = [[""]];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test("should pass", () => {
    const input = ["a"];
    const output = [["a"]];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});

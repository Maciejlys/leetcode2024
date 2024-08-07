import { describe, expect, test } from "vitest";
import testing from ".";
import { ListNode } from "../utils/ListNode";

describe("206", () => {
  test("should pass", () => {
    const arr = [1, 2, 3, 4, 5];
    const listNodes = arr.map((val) => new ListNode(val));
    listNodes.forEach((node, i) => {
      i + 1 > arr.length - 1 ? null : (node.next = listNodes[i + 1]);
    });
    const expected = arr.reverse().map((val) => new ListNode(val));
    expected.forEach((node, i) => {
      i + 1 > arr.length - 1 ? null : (node.next = expected[i + 1]);
    });

    const result = testing(listNodes[0]);

    expect(result).toStrictEqual(expected[0]);
  });
  test("should pass", () => {
    const arr = [1, 2];
    const listNodes = arr.map((val) => new ListNode(val));
    listNodes.forEach((node, i) => {
      i + 1 > arr.length - 1 ? null : (node.next = listNodes[i + 1]);
    });
    const expected = arr.reverse().map((val) => new ListNode(val));
    expected.forEach((node, i) => {
      i + 1 > arr.length - 1 ? null : (node.next = expected[i + 1]);
    });

    const result = testing(listNodes[0]);

    expect(result).toStrictEqual(expected[0]);
  });
});

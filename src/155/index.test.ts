import { describe, expect, test } from "vitest";
import { MinStack } from ".";

describe("155", () => {
  test("should pass", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3); // return -3
    minStack.pop();
    expect(minStack.top()).toEqual(0); // return 0
    minStack.getMin();
  });
});

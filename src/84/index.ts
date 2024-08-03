export default function largestRectangleArea(heights: number[]): number {
  const stack: [number, number][] = [];
  let largestArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length && stack.at(-1)![1] > heights[i]) {
      const [s, h] = stack.pop()!;
      largestArea = Math.max(largestArea, h * (i - s));
      start = s;
    }
    stack.push([start, heights[i]]);
  }

  for (let [start, height] of stack) {
    largestArea = Math.max(largestArea, height * (heights.length - start));
  }

  return largestArea;
}

export default function maxArea(height: number[]): number {
  let area = 0;
  let [left, right] = [0, height.length - 1];

  while (left < right) {
    area = Math.max(
      area,
      Math.min(height[left], height[right]) * (right - left),
    );

    if (Math.min(height[left], height[right]) === height[left]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
}

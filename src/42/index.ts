export default function trap(height: number[]): number {
  let result = 0;
  let [left, right] = [0, height.length - 1];
  let [lMax, rMax] = [height[left], height[right]];

  while (left < right) {
    if (lMax < rMax) {
      left++;
      lMax = Math.max(lMax, height[left]);
      result += lMax - height[left];
    } else {
      right--;
      rMax = Math.max(rMax, height[right]);
      result += rMax - height[right];
    }
  }

  return result;
}

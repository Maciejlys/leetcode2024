export default function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) break; // sorted array and we are looking to the right, there is no point for search
    if (i > 0 && num === nums[i - 1]) continue; // already looked at
    let [left, right] = [i + 1, nums.length - 1];

    while (left < right) {
      const sum = num + nums[left] + nums[right];

      if (sum === 0) {
        result.push([num, nums[left], nums[right]]);
        left++;
        right--;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }

      if (sum < 0) {
        left++;
      }

      if (sum > 0) {
        right--;
      }
    }
  }

  return result;
}

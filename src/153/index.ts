export default function findMin(nums: number[]): number {
  let [left, right] = [0, nums.length - 1];

  while (left < right) {
    const mid = (left + right) >> 1;

    if (nums[left] < nums[right]) {
      return nums[left];
    }

    if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

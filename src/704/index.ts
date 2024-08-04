export default function search(nums: number[], target: number): number {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

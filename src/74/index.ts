export const contains = (nums: number[], target: number) => {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return true;
    else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return false;
};

export default function searchMatrix(
  matrix: number[][],
  target: number,
): boolean {
  let [left, right] = [0, matrix.length - 1];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (contains(matrix[middle], target)) return true;
    else {
      if (target > matrix[middle].at(-1)!) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return false;
}

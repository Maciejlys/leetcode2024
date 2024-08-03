export default function twoSum(numbers: number[], target: number): number[] {
  let [left, right] = [0, numbers.length - 1];

  while (left != right) {
    const sum = numbers[left] + numbers[right];

    if (sum > target) {
      right--;
      continue;
    } else if (sum < target) {
      left++;
      continue;
    } else {
      return [left + 1, right + 1];
    }
  }

  return [0, 0];
}

export default function findDuplicate(nums: number[]): number {
  let [slow, fast] = [0, 0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  let slow2 = 0;

  do {
    slow = nums[slow];
    slow2 = nums[slow2];
  } while (slow != slow2);

  return slow;
}

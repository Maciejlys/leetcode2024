export default function testing(nums: number[], target: number): number[] {
  const missing = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    if (missing.has(diff)) return [missing.get(diff)!, index];
    missing.set(nums[index], index);
  }
  return [];
}

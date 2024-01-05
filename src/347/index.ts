export default function testing(nums: number[], k: number): number[] {
  const frequency = new Map<number, number>();
  nums.forEach((num) => {
    frequency.set(num, frequency.get(num)! + 1 || 1);
  });
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([key, _]) => key)
    .slice(0, k);
}

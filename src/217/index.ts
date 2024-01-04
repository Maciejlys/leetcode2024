export default function testing(nums: number[]) {
  return new Set<number>(nums).size != nums.length;
}

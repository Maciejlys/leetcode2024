const backtrack = (
  nums: number[],
  i: number,
  set: number[],
  subset: number[][],
) => {
  set.push(nums[i]);
  dfs(nums, i + 1, set, subset);
  set.pop();
};

const dfs = (
  nums: number[],
  level = 0,
  set: number[] = [],
  subset: number[][] = [],
): number[][] => {
  subset.push(set.slice());

  for (let i = level; i < nums.length; i++) {
    backtrack(nums, i, set, subset);
  }

  return subset;
};

export default function subsets(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  return dfs(nums);
}

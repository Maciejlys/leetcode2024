import { TreeNode } from "../utils/TreeNode";

export default function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  const dfs = (curr: TreeNode | null, max: number): number => {
    if (!curr) return 0;
    let isGood = 0;
    if (curr.val >= max) {
      isGood = 1;
      max = curr.val;
    }
    return dfs(curr.left, max) + dfs(curr.right, max) + isGood;
  };

  return dfs(root, root.val);
}

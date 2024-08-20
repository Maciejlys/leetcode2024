import { TreeNode } from "../utils/TreeNode";

export default function kthSmallest(root: TreeNode | null, k: number): number {
  const result: number[] = [];
  const dfs = (root: TreeNode | null): void => {
    if (!root) return;

    result.push(root.val);

    dfs(root.left);
    dfs(root.right);

    return;
  };
  dfs(root);
  return result.sort((a, b) => a - b)[k - 1];
}

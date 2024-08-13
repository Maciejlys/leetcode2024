import { TreeNode } from "../utils/TreeNode";

export default function isBalanced(root: TreeNode | null): boolean {
  let imbalance = false;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    else if (!imbalance) {
      const leftHeight = dfs(node.left);
      const rightHeight = dfs(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) {
        imbalance = true;
      }

      return Math.max(leftHeight, rightHeight) + 1;
    }
    return 0;
  };
  dfs(root);
  return !imbalance;
}

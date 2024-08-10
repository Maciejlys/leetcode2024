import { TreeNode } from "../utils/TreeNode";

export default function diameterOfBinaryTree(
  root: TreeNode | null,
  diameters: number[] = [],
): number {
  if (!root) return Math.max(...diameters);

  const dfs = (node: TreeNode | null, depth = 0): number => {
    if (!node) return depth;
    return Math.max(dfs(node?.left, depth + 1), dfs(node?.right, depth + 1));
  };

  const left = dfs(root.left, 0);
  const right = dfs(root.right, 0);
  diameters.push(left + right);
  diameterOfBinaryTree(root.left);
  diameterOfBinaryTree(root.right);

  return Math.max(...diameters);
}

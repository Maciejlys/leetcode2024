import { TreeNode } from "../utils/TreeNode";

export default function maxDepth(root: TreeNode | null, depth = 0): number {
  if (!root) return depth;

  const left = maxDepth(root?.left, depth + 1);
  const right = maxDepth(root?.right, depth + 1);

  return Math.max(left, right);
}

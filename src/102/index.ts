import { TreeNode } from "../utils/TreeNode";

export default function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  const lot = (root: TreeNode | null, depth = 0): void => {
    if (!root) return;

    if (result[depth]) {
      result[depth].push(root.val);
    } else {
      result[depth] = [root.val];
    }

    lot(root.left, depth + 1);
    lot(root.right, depth + 1);
  };
  lot(root);
  return result;
}

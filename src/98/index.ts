import { TreeNode } from "../utils/TreeNode";

export default function isValidBST(root: TreeNode | null): boolean {
  let isValid = true;

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;
    if (node.left) {
      if (node.left.val >= node.val) {
        isValid = false;
        return;
      }
    }
    if (node.right) {
      if (node.right.val <= node.val) {
        isValid = false;
        return;
      }
    }
    dfs(node.left);
    dfs(node.right);
    return;
  };

  dfs(root);

  return isValid;
}

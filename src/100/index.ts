import { TreeNode } from "../utils/TreeNode";

export default function isSameTree(
  p: TreeNode | null,
  q: TreeNode | null,
): boolean {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  } else {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }
}

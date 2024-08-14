import { TreeNode } from "../utils/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
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

export default function rightSideView(root: TreeNode | null): number[] {
  return levelOrder(root).reduce<number[]>(
    (acc, curr) => [...acc, curr.at(-1)!],
    [],
  );
}

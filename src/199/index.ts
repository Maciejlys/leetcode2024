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
  const result = levelOrder(root);

  return result.reduce<number[]>((acc, curr) => {
    acc.push(curr.at(-1)!);
    return acc;
  }, []);
}

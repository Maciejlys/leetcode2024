export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const arrToTree = (nums: number[]) => {
  if (nums.length === 0) {
    return null;
  }
  let root = new TreeNode(nums[0]);
  let q = [root];
  let i = 1;
  while (i < nums.length) {
    let curr = q.shift()!;
    if (i < nums.length) {
      curr.left = new TreeNode(nums[i++]);
      q.push(curr.left);
    }
    if (i < nums.length) {
      curr.right = new TreeNode(nums[i++]);
      q.push(curr.right);
    }
  }
  return root;
};

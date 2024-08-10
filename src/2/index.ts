import { ListNode } from "../utils/ListNode";

export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const addNodes = (
    node1: ListNode | null,
    node2: ListNode | null,
    carry: number,
  ) => {
    if (!node1 && !node2 && carry === 0) return null;

    let sum = carry;
    if (node1) {
      sum += node1.val;
      node1 = node1.next;
    }
    if (node2) {
      sum += node2.val;
      node2 = node2.next;
    }

    let node = new ListNode(sum % 10);
    node.next = addNodes(node1, node2, Math.floor(sum / 10));

    return node;
  };

  return addNodes(l1, l2, 0);
}

import { ListNode } from "../utils/ListNode";

export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let curr = new ListNode();
  const head = curr;
  let carry = 0;

  while (l1 || l2) {
    let sum = carry + (l1?.val || 0) + (l2?.val || 0);
    let next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curr.next = next;
    curr = curr.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    curr.next = new ListNode(carry);
  }

  return head.next;
}

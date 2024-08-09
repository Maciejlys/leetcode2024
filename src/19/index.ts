import { ListNode } from "../utils/ListNode";

const findLen = (head: ListNode | null) => {
  let i = 0;
  if (!head) return i;
  let temp: ListNode | null = head;
  while (temp) {
    temp = temp.next;
    i++;
  }
  return i;
};

export default function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  const len = findLen(head);
  const traverseTo = len - n - 1;

  if (traverseTo < 0) return head?.next || null;

  let curr: ListNode | null = head;
  let i = 0;
  while (i < traverseTo) {
    curr = curr!.next;
    i++;
  }

  if (curr?.next) {
    curr!.next = curr.next.next || null;
  }

  return head;
}

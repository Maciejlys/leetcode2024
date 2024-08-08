import { ListNode } from "../utils/ListNode";

const getMid = (head: ListNode | null) => {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverse = (head: ListNode | null) => {
  let [prev, curr, next]: [ListNode | null, ListNode | null, ListNode | null] =
    [null, head, null];

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

export default function reorderList(head: ListNode | null): void {
  const mid = getMid(head)!;
  let reversed = reverse(mid)!;
  let next = null;
  while (reversed.next) {
    next = head!.next;
    head!.next = reversed;
    head = next;

    next = reversed.next;
    reversed.next = head;
    reversed = next;
  }
}

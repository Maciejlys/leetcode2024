import { ListNode } from "../utils/ListNode";

export default function hasCycle(head: ListNode | null): boolean {
  const visited = new Set();
  while (head) {
    if (visited.has(head)) return true;
    visited.add(head);
    head = head.next;
  }
  return false;
}

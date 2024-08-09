import { ListNode } from "../utils/ListNode";

export default function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  let [first, curr, last] = [head, head, head];
  let deletePos = -n;
  while (last) {
    last = last.next;
    deletePos++;
  }

  for (let i = 0; i < deletePos - 1; i++) {
    curr = curr!.next;
  }

  if (deletePos === 0 && first) {
    return first.next;
  }

  if (curr && curr.next) {
    curr.next = curr.next.next || null;
  } else {
    return null;
  }

  return first;
}

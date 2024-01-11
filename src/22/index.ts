export default function testing(n: number): string[] {
  const result: string[] = [];

  const backtrack = (current: string, opened: number, closed: number) => {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (opened < n) {
      backtrack(current + "(", opened + 1, closed);
    }

    if (closed < opened) {
      backtrack(current + ")", opened, closed + 1);
    }
  };

  backtrack("", 0, 0);

  return result;
}

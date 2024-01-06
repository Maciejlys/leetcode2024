export default function testing(board: string[][]): boolean {
  const boxes = new Map<string, number[]>();
  const columns = new Map<number, number[]>();
  const rows = new Map<number, number[]>();

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const value = board[x][y];
      if (value === ".") continue;
      const subBoxKey = `${Math.floor(x / 3)}${Math.floor(y / 3)}`;

      if (rows.get(x)?.includes(+value)) {
        return false;
      }
      if (columns.get(y)?.includes(+value)) {
        return false;
      }
      if (boxes.get(subBoxKey)?.includes(+value)) {
        return false;
      }

      rows.has(x) ? rows.get(x)?.push(+value) : rows.set(x, [+value]);
      columns.has(y) ? columns.get(y)?.push(+value) : columns.set(y, [+value]);
      boxes.has(subBoxKey)
        ? boxes.get(subBoxKey)?.push(+value)
        : boxes.set(subBoxKey, [+value]);
    }
  }

  return true;
}

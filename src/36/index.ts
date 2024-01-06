export default function testing(board: string[][]): boolean {
  const unique = new Set<string>();

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const value = board[x][y];
      if (value === ".") continue;
      const row = `row:${x} value:${value}`;
      const column = `column:${y} value:${value}`;
      const box = `box:${Math.trunc(x / 3)}${Math.trunc(y / 3)} value:${value}`;
      if (unique.has(row) || unique.has(column) || unique.has(box)) {
        return false;
      }
      unique.add(row).add(column).add(box);
    }
  }

  return true;
}

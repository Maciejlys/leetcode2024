const getHours = (piles: number[], k: number) => {
  return piles.reduce((acc, pile) => (acc += Math.ceil(pile / k)), 0);
};

export default function minEatingSpeed(piles: number[], h: number): number {
  let [left, right] = [0, Math.max(...piles)];

  while (left <= right) {
    const middle = (left + right) >> 1;
    const hours = getHours(piles, middle);
    if (hours > h) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

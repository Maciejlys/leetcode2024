interface Car {
  position: number;
  speed: number;
}

export default function carFleet(
  target: number,
  position: number[],
  speed: number[],
): number {
  const cars: Car[] = position.map((pos, i) => ({
    position: pos,
    speed: speed[i],
  }));
  cars.sort((a, b) => a.position - b.position);
  const stack: Car[] = [];

  while (cars.length) {
    stack.push(cars.pop()!);

    if (stack.length >= 2) {
      const willIntersect =
        (target - stack.at(-1)!.position) / stack.at(-1)!.speed <=
        (target - stack.at(-2)!.position) / stack.at(-2)!.speed;

      if (willIntersect) stack.pop();
    }
  }

  return stack.length;
}

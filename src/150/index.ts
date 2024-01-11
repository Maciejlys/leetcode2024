const operate = (a: number, b: number, operation: string): number => {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return Math.trunc(a / b);
    case "*":
      return a * b;
    default:
      return 0;
  }
};

export default function testing(tokens: string[]): number {
  const numbers: number[] = [];

  for (let token of tokens) {
    if (Number.isInteger(+token)) {
      numbers.push(+token);
    } else {
      const first = numbers.pop()!;
      const second = numbers.pop()!;

      const result = operate(second, first, token);
      numbers.push(result);
    }
  }

  return numbers[0];
}

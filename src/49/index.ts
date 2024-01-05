export default function testing(strs: string[]): string[][] {
  const anagrams = new Map<string, string[]>();
  strs.forEach((str) => {
    const sorted = str.split("").sort().join("");
    if (anagrams.has(sorted)) {
      anagrams.get(sorted)?.push(str);
    } else {
      anagrams.set(sorted, [str]);
    }
  });
  return [...anagrams.values()];
}

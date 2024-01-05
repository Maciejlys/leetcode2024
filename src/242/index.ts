const countOccurences = (input: string): Map<string, number> => {
  const occurences: Map<string, number> = new Map();
  for (const char of input) {
    occurences.set(char, occurences.get(char) + 1 || 0);
  }

  return occurences;
};

export default function isAnagram(s: string, t: string) {
  if (s.length != t.length) return false;

  const sOcc = countOccurences(s);
  const tOcc = countOccurences(t);

  for (const [char, count] of sOcc) {
    if (tOcc.get(char) !== count) return false;
  }

  return true;
}

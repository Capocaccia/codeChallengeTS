export const reverseSeq = (n: number) => {
  const output = [];

  for (let i = n; i >= 1; i--) {
    output.push(i);
  }

  return output;
};

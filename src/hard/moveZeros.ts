export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  const output: typeof arr = [];

  const nonZeros: typeof arr = [];
  const zeros: typeof arr = [];

  arr.forEach((value) => {
    if (value === 0) {
      zeros.push(value);
      return;
    }

    nonZeros.push(value);
  });

  return output.concat(nonZeros, zeros);
};

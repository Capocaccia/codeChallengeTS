// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  const zeros = arr.filter((item) => item === 0);
  const nonZeros = arr.filter((item) => item !== 0);
  return [...nonZeros, ...zeros];
};

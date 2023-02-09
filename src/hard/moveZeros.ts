// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  let count = 0;
  const zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === zero) {
      arr.splice(i, 1);
      i--;
      count++;
    }
  }

  return [...arr, ...new Array(count).fill(zero)];
};

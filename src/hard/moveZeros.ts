// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  let arrCopy = [...arr];
  let index = 0;

  while (index < arr.length) {
    const value = arrCopy[index];

    if (value === 0) {
      const beginning = arrCopy.slice(0, index);
      const end = arrCopy.slice(index + 1);

      // If the end of the array is all zeroes
      if (end.every((value) => value === 0)) {
        return arrCopy;
      }

      arrCopy = [...beginning, ...end, 0];
    } else {
      index++;
    }
  }
};

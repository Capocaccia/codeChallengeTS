// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Two pointers: i(zero ctr) and j(non-zero ctr)
// Conditions to increment i (zero ctr):
// 1.) if: output[i] === 0 && output[j] !== 0
// 2.) if: i is non-zero
// j++;

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  // creating a copy of input inorder to return a new array
  // for in-place manipulation take reference of the original array
  const output = arr.slice();
  let i = 0, // zero ctr
    j = 1; // non-zero ctr

  while (j < output.length) {
    if (output[i] === 0 && output[j] !== 0) {
      output[i] = output[j];
      output[j] = 0;
      // since "i" becomes non-zero, incrementing it
      i++;
    }

    // since "i" becomes non-zero, incrementing it
    if (output[i] !== 0) {
      i++;
    }
    j++;
  }
  return output;
};

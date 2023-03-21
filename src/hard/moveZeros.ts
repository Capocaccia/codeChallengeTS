/* eslint-disable prettier/prettier */
// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {

  //initialze empty array to eventually be our array with zeros at the end
  const zerosToTheEnd = [];

  //keep track of number of zeros, which, ironcically, starts as zero.
  let zeroTally = 0;

  //loop through and check if each element of the array is not equal to zero
  for (let index = 0; index < arr.length; index++) {

    //if element is not equal to zero, it pushes it to the new array. Once this loop finishes, all elements from original array that are not zeroes should be their original order.
    if (arr[index] !== 0) {
      zerosToTheEnd.push(arr[index]);
    } else {
      zeroTally++;
    }
  }

  //zeroTally should now have the number of zeros from the original array. Loop through each each zero in the original array and push to zerosToTheEnd array.
  for (let index = 0; index < zeroTally; index++) {
    zerosToTheEnd.push(0);
  }

  return zerosToTheEnd;
};

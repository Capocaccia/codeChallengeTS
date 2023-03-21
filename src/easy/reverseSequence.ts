/* eslint-disable prettier/prettier */
// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// EXAMPLE:
// n=5 //returns [5,4,3,2,1]
export const reverseSeq = (n: number) => {
  //initialize empty array for the countdown
  const countDownArray: number[] = [];

  //if the number is greater than 0, it pushes the number to the array and decrements 
  for (let index = n; index > 0; index--) {
    countDownArray.push(index);
  }

  //return the FINAL COUNTDOWN!!!!
  return countDownArray;
};

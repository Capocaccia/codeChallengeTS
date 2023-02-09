// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// EXAMPLE:
// n=5 //returns [5,4,3,2,1]
export const reverseSeq = (n: number) => {
  let rev = [];

  for (let i = n; i > 0; i--) {
    rev.push(i);
  }

  return rev;
};

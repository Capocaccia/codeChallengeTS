// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// EXAMPLE:
// n=5 //returns [5,4,3,2,1]
export const reverseSeq = (n: number) => {
  return Array(n)
    .fill(0)
    .map(() => {
      if (n > 0) {
        return n--;
      }
    });
};

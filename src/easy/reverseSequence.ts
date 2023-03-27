// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// EXAMPLE:
// n=5 //returns [5,4,3,2,1]
export const reverseSeq = (n: number) => {
  //creates an array and adds numbers in reverse order
  var arr = [];
  for(var i = 1; i <= n; i++){
    arr.unshift(i);
  }
  return arr;
};

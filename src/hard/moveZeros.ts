// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//define a newArray variable
//map over each item in the array
//if the item being mapped over is 0
//remove that item and push it onto the end of the array
//once the map has completed return the new array
export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[],
) => {
  let newArr;
  const firstHalfOfArray = arr.filter((item) => {
    item !== 0;
  });
  //naming could be more clear ^^
  const numOfZeros = arr.length - firstHalfOfArray.length;
  //using the number of zeros determined by comparing the arr's length before and after removal of 0s add one 0 per every count
};

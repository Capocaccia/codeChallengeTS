// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function isNotZero(element: any, index: any, array: any[]) {
  return (typeof element !== "number" ||element != 0);
  //filters out zeros 
} 

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  //records size of array then after filter of zero adds the zeros back at the end.
  var startSize = arr.length;
  var arr = arr.filter(isNotZero);
  var endSize = arr.length;
  if(startSize-endSize != 0){
    var arr2:number[] = new Array(startSize-endSize);
    for(var i = 0; i < arr2.length; i++){
      arr2[i] = 0;
    }
    arr = arr.concat(arr2);
  }
  return arr;
};

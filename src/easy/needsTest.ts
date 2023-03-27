// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

function isNotItem(element: any, index: any, array: any[]) {
    var remove = array[0];
    return (element != remove); 
 } 

 //adds item to begining of data filters it and any matching out
 export const removeElement = (startingArray: (string | Number)[], valueToDelete: (string | Number)) => {
    var length = startingArray.unshift(valueToDelete);
    var testArray = startingArray.filter(isNotItem);

  return testArray;
 };
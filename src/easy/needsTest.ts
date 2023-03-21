/* eslint-disable prettier/prettier */
// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned.

function removeMatchingArrayItems(array: number[], key: string | number) {
  //initialize matchesKey variable to false (no matches)
  let matchesKey = false;

  //create a for loop to iterate through array and check for matches to the key parameter
  for (let index = 0; index < array.length; index++) {
    //if the item at a particular index matches the key, the item is removed from the array using the splice method and updates the machesKey variable to true. The loop counter is then decreminted so that is does not skip over the next item.
    if (array[index] === key) {
      array.splice(index, 1);
      matchesKey = true;
      index--;
    }
  }
  //if matchesKey is true, at least one item in the array was removed. If false, no items were removed and nothing matched.
  return matchesKey;
}

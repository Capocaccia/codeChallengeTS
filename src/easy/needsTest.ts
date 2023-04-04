// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned
// How do I set a type for integer?
// Should loose equals be filtered out?

export const filterArrByKey = (
  arr: (string | number)[],
  key: string | number
): false | (string | number)[] => {
  const filteredArr = arr.filter((value) => value === key);
  if (filteredArr.length === 0) {
    return false;
  }

  return filteredArr;
};

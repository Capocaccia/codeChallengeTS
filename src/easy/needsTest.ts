// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
export const removeAllKey = (
  arr: (string | number)[],
  key: string | number
) => {
  // if no values match the key, false should be returned
  if (arr.indexOf(key) === -1) return false;

  // this function should remove any items from the original array that match the key
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] === key) arr.splice(i, 1);
  }
};

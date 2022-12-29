// write a function that takes two parameters. The first parameter is an array that can contain only strings,
// only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

const filterKeyFromArray = (array: any[], key: string | number) => {
  const filtered = array.filter((item: string | number) => item !== key);
  if (filtered.length === array.length) {
    return false;
  }
  return filtered;
};

export default filterKeyFromArray;

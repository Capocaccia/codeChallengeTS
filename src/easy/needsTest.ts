// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

type inputType = string | number;

export const removeMatchElement = (
  inputArr: Array<inputType>,
  key: inputType
) => {
  const initialLength = inputArr.length;
  let ctr = 0;

  // checking against the updated array
  while (ctr < inputArr.length) {
    if (inputArr[ctr] === key) {
      inputArr.splice(ctr, 1);
    } else {
      ctr++;
    }
  }
  return initialLength != inputArr.length;
};

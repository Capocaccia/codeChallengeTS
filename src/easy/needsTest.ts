// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

// first possible io combo:
//Input => ["cat", 1, 2, 4, "frog", 3, "bear", 7], {"cat": 7}
//Output => [1, 2, 4, "frog", 3, "bear", 7]

//The other possible intention of the above problem could be removing the key's value from the array in the first parameter like so:
//Input => ["cat", 1, 2, 4, "frog", 3, "bear", 7], {"cat": 7}
//Output => ["cat", 1, 2, 4, "frog", 3, "bear"]

// Since the instruction above sound more like it expects the first io combo I've declared above I will work through the problem from this view point:

const testableFunction = (
  a: Array<string | number>,
  b: { [key: string | number]: any },
) => {
  if (a.includes(Object.keys(b)[0])) {
    return a.filter((item) => {
      return item !== Object.keys(b)[0];
    });
  } else {
    return false;
  }
};

export { testableFunction };

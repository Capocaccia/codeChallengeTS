// DESCRIPTION:
// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

// NOTES:
// The items and the key will be either an integer or a string (consisting of letters only)
// If the key does not appear in the items, return 0

// EXAMPLE:
// 90000, 0           //returns integer value of 4
// "abcdaaadse", "a"  //returns integer value of 3
// "abcdaaadse", "z"  //returns integer value of 0

export const getConsecutiveItems = (
  items: string | number,
  key: string | number
) => {
  let itemsArr: any = items.toString().split('');
  let keyStr = key.toString();
  if (!itemsArr.includes(keyStr)) {
    return 0;
  }
  let maxVal = 0;
  let count = 0;
  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i] === keyStr) {
      count++;
      if (i === itemsArr.length-1) {
        if (count > maxVal) {
        maxVal = count;
        count = 0;
        }
      }
    } else {
      if (count > maxVal) {
        maxVal = count;
        count = 0;
      }
    }
  }
  return maxVal;
};

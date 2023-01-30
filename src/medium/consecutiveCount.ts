// DESCRIPTION:
// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

// NOTES:
// The items and the key will be either an integer or a string (consisting of letters only)
// If the key does not appear in the items, return 0

// EXAMPLE:
// 90000, 0           //returns integer value of 4
// "abcdaaadse", "a"  //returns integer value of 3
// "abcdaaadse", "z"  //returns integer value of 0

// Loop Condition: i < string length
// Use two counters for tracking --> count and maxCount;
// Using two pointers for max counts --> i and j
// Initial Condition: i:0, j:0 (j = i)
// if: a[i] === a[j] === ele --> count++ and maxCount to be max of [count, maxCount];
// reset conditions:
// 1.) when j reaches the end
// 2.) itemsArr[j] not equals key
// i++ and j = i;

export const getConsecutiveItems = (
  items: string | number,
  key: string | number
) => {
  const itemsArr = String(items).split("");
  const keyToString = String(key);
  let i = 0,
    j = 0,
    count = 0,
    maxCount = 0;

  while (i < itemsArr.length) {
    if (itemsArr[i] === keyToString && itemsArr[j] === keyToString) {
      j++;
      count++;
      maxCount = Math.max(count, maxCount);
    }
    // reset condition:
    if (itemsArr[j] !== keyToString || j > itemsArr.length) {
      count = 0;
      i++;
      j = i;
    }
  }

  return maxCount;
};

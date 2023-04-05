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
  // items: string | number,
  items: string,
  key: string | number
) => {
  let currentCount = 0;
  let longestSequence = 0;
  for (const char of items.split("")) {
    if (char === key) {
      currentCount++;
      continue;
    }

    if (currentCount > longestSequence) {
      longestSequence = currentCount;
    }

    currentCount = 0;
  }

  return longestSequence;
};

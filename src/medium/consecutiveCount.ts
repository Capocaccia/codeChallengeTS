export const getConsecutiveItems = (
  items: string | number,
  key: string | number
) => {
  let counter = 1;
  const longestConsecutiveValues: number[] = [];

  const charactersSplit = Array.from(String(items));

  if (!charactersSplit.includes(String(key))) {
    return 0;
  }

  charactersSplit.forEach((value, index) => {
    if (value === charactersSplit[index + 1]) {
      counter = counter + 1;
      return;
    }

    if (counter > Math.max(...longestConsecutiveValues)) {
      longestConsecutiveValues.push(counter);
    }

    counter = 1;
  });

  return longestConsecutiveValues.pop();
};

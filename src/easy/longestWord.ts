export const longestWord = (stringOfWords: string, splitAt = " ") => {
  const splitWords = stringOfWords.split(splitAt);

  let currentLongestWordFound = "";

  splitWords.forEach((word) => {
    if (word.length < currentLongestWordFound.length) {
      return;
    }
    currentLongestWordFound = word;
  });

  return currentLongestWordFound;
};

// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

export const longestWord = (stringOfWords: string) => {
  const longestWord = stringOfWords
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .slice(-1)[0];

  if (longestWord.length == 0) {
    return false;
  }
  if (typeof longestWord != "string") {
    return false;
  } else {
    return longestWord;
  }
};

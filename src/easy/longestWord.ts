// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

export const longestWord = (stringOfWords: string) => {
  const words = stringOfWords.split(" ");
  words.sort((a, b) =>
    a.length < b.length ? -1 : a.length > b.length ? 1 : 0
  );
  return words[words.length - 1];
};

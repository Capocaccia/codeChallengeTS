// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

export const longestWord = (stringOfWords: string): string => {
  const wordsArray = stringOfWords.split(/\s/);

  return wordsArray.reduce((lastLongestWord, ele) => {
    if (ele.length >= lastLongestWord.length) {
      lastLongestWord = ele;
    }
    return lastLongestWord;
  }, wordsArray[0]);
};

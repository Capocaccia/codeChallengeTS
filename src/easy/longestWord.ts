// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

export const longestWord = (stringOfWords: string) => {
  const stringArr = stringOfWords.split(' ');
  let longestString;
  let longestStringValue = 0;

  for (let each of stringArr) {
    if (each.length >= longestStringValue) {
      longestString = each;
      longestStringValue = each.length;
    }
  }

  return longestString;
};

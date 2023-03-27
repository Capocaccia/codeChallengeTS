// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold


//splits on space character then checks wich word is longest ruturning the last word if more than one matches the longest length.
export const longestWord = (stringOfWords: string) => {
  var input = stringOfWords;
  var splitInput = input.split(' ');
  var length = 0;
  var longestWord;
  splitInput.forEach(element => {
    if(element.length >= length){
      length = element.length;
      longestWord = element;
    }
  });
  return longestWord;
};

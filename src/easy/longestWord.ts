/* eslint-disable prettier/prettier */
// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

export const longestWord = (stringOfWords: string) => {
  //use the split method and feed it a space to create an array of individual words from the string of multiple words
  const wordsArray = stringOfWords.split(" ");

  //create variables to keep track of value of longest word by comparing words at an index to an iterrative increase in the lengthCheck variable.
  let lengthCheck = 0;
  let longestWord = "";

  //Loop through each word in the array and check if it is greater than or equal to current lengthCheck
  for (let index = 0; index < wordsArray.length; index++) {

    //if the word's length is greater than or equal to the lengthCheck, update longtestWord to this word. When the loop completes, the longestWord should be what is says in the name.
    if (wordsArray[index].length >=lengthCheck) {
      lengthCheck = wordsArray[index].length;
      longestWord = wordsArray[index];
    }
    return longestWord;
  }
};

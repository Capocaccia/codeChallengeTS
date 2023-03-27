// DESCRIPTION:
// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

// NOTES:
// The items and the key will be either an integer or a string (consisting of letters only)
// If the key does not appear in the items, return 0

// EXAMPLE:
// 90000, 0           //returns integer value of 4
// "abcdaaadse", "a"  //returns integer value of 3
// "abcdaaadse", "z"  //returns integer value of 0
function getLongestStreak(item: string, key: string): number {
  //variables
  var currentStreak = 0;
  var longestStreak = 0;
  //loop over string checking for consecutive values 
  for(var i = 0; i <= item.length+1; i++){
    if(item.substring(i, i+1) == key){
    currentStreak = currentStreak +1;
    if(currentStreak > longestStreak){
      longestStreak = currentStreak;
    } 
    }else
      currentStreak = 0;
    }
//if streak is longer record it else reset the streak if value does not match
    if(currentStreak > longestStreak){
      longestStreak = currentStreak;
    }
  return longestStreak;
}

export const getConsecutiveItems = (
  items: string | number,
  key: string | number
) => {
    var items1 = items as any;
    items1 = items1.toString();
    var key1 = key as any;
    key1 = key1.toString();
    var streak = getLongestStreak(items1, key1);
    return streak;
};

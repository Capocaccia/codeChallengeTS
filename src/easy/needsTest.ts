//mms  write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

// I worked under the assumption that i was returning new array without keys and place matching array was?
// Asuming a key can only be found once in array

export const findKey = (
    listOfItems: (string | number)[], key: (string | number)
) => {
    const indexOfKey = listOfItems.indexOf(key);
    if (indexOfKey === -1) {
        return false
    } else {
        const modifiedList = listOfItems.slice(indexOfKey);
        return `Key found at index ${indexOfKey}, New list is ${modifiedList}`;
    }
};
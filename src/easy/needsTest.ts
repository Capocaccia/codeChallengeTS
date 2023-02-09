// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

export const removeValue = (arr: any, key: string | number) => {
    if (!arr.includes(key)) {
        return false;
    }
    arr.splice(arr.indexOf(key), 1);
    return arr;
}

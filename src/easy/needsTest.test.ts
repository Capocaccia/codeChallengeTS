// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned


import { findKey } from './needsTest';

describe('findKey', () => {
    const arrOfNums = [9, 12, 92, 5, 3, 34, 6];
    const arrOfStrings = ['nine', 'twelve', 'ninety-two', 'five', 'three', 'thirty-four', 'six'];
    const arrOfNumsAndStrings = ['nine', 12, 92, 'five', 'three', 34, 6];

    it('should return a modified array and where the key was found', () => {
        expect(findKey(arrOfNums, 12)).toEqual("Key found at index 1, New list is 12,92,5,3,34,6");
        expect(findKey(arrOfStrings, 'five')).toEqual("Key found at index 3, New list is five,three,thirty-four,six");
        expect(findKey(arrOfNumsAndStrings, 12)).toEqual("Key found at index 1, New list is 12,92,five,three,34,6");
    });
    
    it('should return false', () => {
        expect(findKey(arrOfNums, 100)).toBeFalsy();
        expect(findKey(arrOfStrings, 'one')).toBeFalsy();
        expect(findKey(arrOfNumsAndStrings, 'four')).toBeFalsy();
    });
});

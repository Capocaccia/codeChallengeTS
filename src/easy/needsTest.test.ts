


const remove_dup = require('src/easy/needsTest.ts');

describe('test duplicate values', () => {

    let arr1 = ['a', 'b', 'c'];
    let arr2 = ['d'];

    let arr3 = [1, 2, 3];
    let arr4 = [1];

    it('should be false', () => {
        expect(remove_dup.remove_duplicate(arr1, arr2)).toBeFalsy();
    });

    it('should return 2 and 3', () => {
        expect(remove_dup.remove_duplicate(arr3, arr4)).toBeFalsy();
    });
});
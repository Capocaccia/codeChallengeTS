/* eslint-disable prettier/prettier */
import removeMatchingArrayItems from "./needsTest";

describe("removeMatchingArrayItems function", () => {
  it("should remove matching items from the array and return true", () => {
    const array = [1, 2, 3, 4, 5];
    const key = 3;
    const result = removeMatchingArrayItems(array, key);
    expect(result).toBe(true);
    expect(array).toEqual([1, 2, 4, 5]);
  });

  it("should return false if no items from the array match the key and the array should be unchanged", () => {
    const array = [1,2,3,4,5];
    const key = 6;
    const result = removeMatchingArrayItems(array, key);
    expect(result).toBe(false);
    expect(array).toEqual([1,2,3,4,5]);
  });

  it("should remove all items that match the key from the array", () => {
    const array = [1,2,3,3,3,3,3,4,5];
    const key = 3;
    const result = removeMatchingArrayItems(array, key);
    expect(result).toBe(true);
    expect(array).toEqual([1,2,4,5]);
  });
});

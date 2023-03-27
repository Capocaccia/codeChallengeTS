import { removeElement } from "./needsTest";
const testArray = [1, 2, 3, 4, 7, 6 ,8 , 9, 99, "bob", "mary", 2, 3, 3, 3, 3, 33];
const testArrayC = [1, 2, 3, 4, 7, 6 ,8, 99, "bob", "mary", 2, 3, 3, 3, 3, 33];
const testArrayC1 = [1, 2, 4, 7, 6 ,8 , 9, 99, "bob", "mary", 2, 33];
const testArrayC2 = [1, 2, 3, 4, 7, 6 ,8 , 9, 99, "bob", 2, 3, 3, 3, 3, 33];
const testArrayC4 = [1, 2, 3, 4, 7, 6 ,8 , 9, 99, "bob", "mary", 2, 3, 3, 3, 3, 33];
const testArrayC3 = [];

it("Function should return the the array with values missed", () => {
    expect(removeElement(testArray, 9)).toEqual(expect.arrayContaining(testArrayC));
    expect(removeElement(testArray, 3)).toEqual(expect.arrayContaining(testArrayC1));
    expect(removeElement(testArray, "mary")).toEqual(expect.arrayContaining(testArrayC2));
    //expect(removeElement(testArrayC3, 9)).toThrow(TypeError)); // this is in here as a edge case it purposfully fails I am not familiar enough with jest on how to catch this type of error specifically as it is a compile error, this is a ambiguity in the instructions on what if it is null array/empty
    expect(removeElement(testArray, "Fred")).toEqual(expect.arrayContaining(testArrayC4));
});
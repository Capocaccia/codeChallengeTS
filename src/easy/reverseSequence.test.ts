import { reverseSeq } from "./reverseSequence";

it("Function should return the reversed sequence", () => {
  expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1]);
  expect(reverseSeq(1)).toEqual([1]);
  expect(reverseSeq(3)).toEqual([3, 2, 1]);
  expect(reverseSeq(15)).toEqual([
    15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ]);
});

import { testableFunction } from "./needsTest";

describe("testableFunction", () => {
  it("should return array excluding second parameter from the array in first parameter if found or false if not", () => {
    expect(
      testableFunction(["cat", 1, 2, 4, "frog", 3, "bear", 7], { cat: 7 }),
    ).toEqual([1, 2, 4, "frog", 3, "bear", 7]);
    expect(
      testableFunction(["cat", 1, 2, 4, "frog", 3, "bear", 7], { dog: 7 }),
    ).toEqual(false);
  });
});

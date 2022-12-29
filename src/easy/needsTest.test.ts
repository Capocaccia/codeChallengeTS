import filterKeyFromArray from "./needsTest";

describe("filterKeyFromArray", () => {
  const keys = ["a", 1];
  const mixedArray = ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5];

  keys.forEach((key) => {
    it(`Should remove ${key} from the array`, () => {
      const filtered = filterKeyFromArray(mixedArray, key);
      expect(filtered).not.toContain(key);
    });
  });
  it("Should return false if no values match the key", () => {
    const filtered = filterKeyFromArray(mixedArray, "key");
    expect(filtered).toBe(false);
  });
});

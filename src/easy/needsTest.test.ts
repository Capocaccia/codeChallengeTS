import { removeAllKey } from "./needsTest";

test("removes all instances of string key from original array", () => {
  const arr = [1, 2, "a", "b", 1, 2, "a", "b"];
  removeAllKey(arr, "a");
  expect(arr).toEqual([1, 2, "b", 1, 2, "b"]);
});

test("removes all instances of number key from original array", () => {
  const arr = [1, 2, "a", "b", 1, 2, "a", "b"];
  removeAllKey(arr, 1);
  expect(arr).toEqual([2, "a", "b", 2, "a", "b"]);
});

test("returns false if key not found", () => {
  const arr = [1, 2, 3];
  const result = removeAllKey(arr, 4);
  expect(result).toEqual(false);
});

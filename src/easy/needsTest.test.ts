import { filterArrByKey } from "./needsTest";

test("Filters with strings", () => {
  const arr = ["bear", 145, "tiger", "lion", 0.8, "hornet", "tiger", "whale"];
  expect(filterArrByKey(arr, "tiger")).toStrictEqual(["tiger", "tiger"]);
});

test("Returns false for no matches", () => {
  const arr = ["bear", 145, "tiger", "lion", 0.8, "hornet", "tiger", "whale"];
  expect(filterArrByKey(arr, 45)).toBe(false);
});

test("Filters out loose equals", () => {
  const arr = ["4", 4, "4"];
  expect(filterArrByKey(arr, 4)).toStrictEqual([4]);
});

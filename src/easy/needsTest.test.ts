import { filterArrByKey } from "./needsTest";

it("Function should filter out non matching characters", () => {
  expect(
    filterArrByKey(
      ["bear", 145, "tiger", "lion", 0.8, "hornet", "tiger", "whale"],
      "tiger"
    )
  ).toStrictEqual(["tiger", "tiger"]);

  expect(
    filterArrByKey(
      ["bear", 145, "tiger", "lion", 0.8, "hornet", "tiger", "whale"],
      "tiger"
    )
  ).toStrictEqual(["tiger", "tiger"]);

  expect(
    filterArrByKey(
      ["bear", 145, "tiger", "lion", 0.8, "hornet", "tiger", "whale"],
      45
    )
  ).toBe(false);

  expect(filterArrByKey(["4", 4, "4"], 4)).toStrictEqual([4]);
});

import { getConsecutiveItems } from "./consecutiveCount";
it("Function should return the consecutive count", () => {
  expect(
    getConsecutiveItems(
      "ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii",
      "z"
    )
  ).toEqual(0);
  expect(
    getConsecutiveItems(
      "ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii",
      "i"
    )
  ).toEqual(11);
  expect(getConsecutiveItems(90000, 0)).toEqual(4);
  expect(getConsecutiveItems(90000, 3)).toEqual(0);
});

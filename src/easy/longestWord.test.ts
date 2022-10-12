import { longestWord } from "./longestWord";

it("Function should return the longest word", () => {
  expect(longestWord("a b c def")).toEqual("def");
  expect(longestWord("a b c d each")).toEqual("each");
  expect(longestWord("each step")).toEqual("step");
  expect(longestWord("forward each step going")).toEqual("forward");
  expect(longestWord("brings each step going")).toEqual("brings");
  expect(longestWord("brings each opportunity step going")).toEqual(
    "opportunity"
  );
});

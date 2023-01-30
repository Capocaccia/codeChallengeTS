import { removeMatchElement } from "./needsTest";

it("Function should remove matching string", () => {
  const input = ["a", "b", "b", "d"];

  removeMatchElement(input, "b");

  expect(input).not.toContain(["b"]);
});

it("Function should remove matching integer", () => {
  const input = [1, 2, 3, 100, 2, 1000, 2, 10000];

  removeMatchElement(input, 2);
  expect(input).not.toContain(5);
});

it("Function should remove matching key from an alphanumeric array", () => {
  const input = ["hello", 20, 30, "world", 20];

  removeMatchElement(input, "world");
  expect(input).not.toContain("world");
});

it("Function return false for non-matching key", () => {
  const input = ["hello", 20, 30, "world", 20];

  expect(removeMatchElement(input, "lorem")).toBeFalsy();
});

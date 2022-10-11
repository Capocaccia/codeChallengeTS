import { moveZeros } from "./moveZeros";

it("Function should return the array in the original order with zeros at the end", () => {
  expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toEqual([
    1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
  ]);

  expect(
    moveZeros([9, 0.0, 0, 9, 1, 2, 0, 1, 0, 1, 0.0, 3, 0, 1, 9, 0, 0, 0, 0, 9])
  ).toEqual([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  expect(
    moveZeros([
      "a",
      0,
      0,
      "b",
      "c",
      "d",
      0,
      1,
      0,
      1,
      0,
      3,
      0,
      1,
      9,
      0,
      0,
      0,
      0,
      9,
    ])
  ).toEqual([
    "a",
    "b",
    "c",
    "d",
    1,
    1,
    3,
    1,
    9,
    9,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);

  expect(
    moveZeros([
      "a",
      0,
      0,
      "b",
      null,
      "c",
      "d",
      0,
      1,
      false,
      0,
      1,
      0,
      3,
      [],
      0,
      1,
      9,
      0,
      0,
      {},
      0,
      0,
      9,
    ])
  ).toEqual([
    "a",
    "b",
    null,
    "c",
    "d",
    1,
    false,
    1,
    3,
    [],
    1,
    9,
    {},
    9,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);

  expect(moveZeros([0, 1, null, 2, false, 1, 0])).toEqual([
    1,
    null,
    2,
    false,
    1,
    0,
    0,
  ]);
});

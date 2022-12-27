import { removeItem } from "./needsTest";

const arrayOfNumbers = [1, 2, 3, 10, 999, 10, 10, 2];
const arrayOfStrings = ["cat", "dog", "bird", "cat", "giraffe", "giraffe"];

const arrayTypeVariations = {
  number: arrayOfNumbers,
  string: arrayOfStrings,
  merged: [...arrayOfNumbers, ...arrayOfStrings],
};

type ArrayVariation = keyof typeof arrayTypeVariations;

interface SetupParameters {
  type: ArrayVariation;
  key: string | number;
}

const setup = ({ type, key }: SetupParameters) => {
  const currentArrayVariation: (string | number)[] = arrayTypeVariations[type];
  const { updatedArray, result } = removeItem(currentArrayVariation, key);

  return {
    containsValue: updatedArray.includes(key),
    result,
  };
};

it("should remove all values from arrays that match keys", () => {
  const testArguments: SetupParameters[] = [
    { type: "string", key: "cat" },
    { type: "number", key: 1 },
    { type: "merged", key: "giraffe" },
  ];

  testArguments.forEach((args) => {
    const { containsValue, result } = setup(args);

    expect(containsValue).toBeFalsy();
    expect(result).toBeTruthy();
  });
});

it("should return false for each key not found in arrays", () => {
  const testArguments: SetupParameters[] = [
    { type: "string", key: "kitten" },
    { type: "number", key: 1.45 },
    { type: "merged", key: "fish" },
  ];

  testArguments.forEach((args) => {
    const { result } = setup(args);

    expect(result).toBeFalsy();
  });
});

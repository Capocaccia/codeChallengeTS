export const removeItem = (
  array: (string | number)[],
  key: string | number
) => {
  const updatedArray: (string | number)[] = [];
  let removed = false;

  array.forEach((value) => {
    // Set removed to true and skip current iteration,
    // preventing value being added to updated array
    if (value === key) {
      removed = true;
      return;
    }

    updatedArray.push(value);
  });

  return {
    updatedArray,
    result: removed,
  };
};

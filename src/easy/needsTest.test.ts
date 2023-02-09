import { removeValue } from "./needsTest";

it("Function should return filtered array or false", () => {
    expect(removeValue(['a', 'b', 'c', 'd'], 'c')).toEqual(['a', 'b', 'd']);
    expect(removeValue(['a', 'b', 'c', 'd'], 'z')).toEqual(false);
    expect(removeValue([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(removeValue([1, 2, 3, 4], 100)).toEqual(false);
    expect(removeValue(['a', 1, 'b', 2], 'b')).toEqual(['a', 1, 2]);
    expect(removeValue(['a', 1, 'b', 2], 2)).toEqual(['a', 1, 'b']);
});

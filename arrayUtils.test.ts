import { findMax, removeDuplicates } from "./arrayUtils";

describe("Array Utilities", () => {
  describe("findMax", () => {
    test("finds the maximum number in an array", () => {
      expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    });

    test("returns null for an empty array", () => {
      expect(findMax([])).toBeNull();
    });

    test("handles negative numbers", () => {
      expect(findMax([-10, -5, -1, -20])).toBe(-1);
    });
  });

  describe("removeDuplicates", () => {
    test("removes duplicate items from an array", () => {
      expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("works with strings", () => {
      expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    });

    test("handles an empty array", () => {
      expect(removeDuplicates([])).toEqual([]);
    });

    test("handles arrays with all unique values", () => {
      expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });
});

export const sumArray = (numbers: number[]): number => {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Input must be an array of numbers");
  }

  if (numbers.length === 0) {
    return 0; // 빈 배열의 합은 0
  }

  return numbers.reduce((sum, num) => {
    if (typeof num !== "number") {
      throw new TypeError("Array must contain only numbers");
    }
    return sum + num;
  }, 0);
};


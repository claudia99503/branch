export const findMax = (numbers: number[]): number | null => {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
};

export const removeDuplicates = (items: any[]): any[] => {
  return [...new Set(items)];
};

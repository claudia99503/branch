export const capitalize = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

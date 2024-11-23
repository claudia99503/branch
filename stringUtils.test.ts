import { capitalize, reverseString } from './stringUtils';

describe('String Utilities', () => {
  describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('converts the rest of the string to lowercase', () => {
      expect(capitalize('hELLo')).toBe('Hello');
    });

    test('returns an empty string if input is empty', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('reverseString', () => {
    test('reverses a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('handles empty strings', () => {
      expect(reverseString('')).toBe('');
    });

    test('handles strings with spaces and special characters', () => {
      expect(reverseString('Hello World!')).toBe('!dlroW olleH');
    });
  });
});


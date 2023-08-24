import { capitalize, double, filterEven, sum, average } from './utils';
// double, filterEven, sum, average
describe('Utils', () => {
  describe('Capitalize tests', () => {
    it('should capitalize first letter of a string', () => {
      expect(capitalize('john')).toBe('John');
    });
    it('should return empty string if input is empty', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('Double Tests', () => {
    it('should double each number in an array', () => {
      const data: number[] = double([1, 2, 3]);
      expect(data).toEqual([2, 4, 6]);
    });

    it('should return empty array if array is empty', () => {
      const data: number[] = double([]);
      expect(data).toEqual(data);
    });
  });

  describe('FilterEven Tests', () => {
    it('should return an array of even numbers', () => {
      const data: number[] = filterEven([1, 2, 3, 4, 5]);
      expect(data).toEqual([2, 4]);
    });
    it('should return an empty array if no even numbers are found', () => {
      const data: number[] = filterEven([1, 3, 5]);
      expect(data).toEqual([]);
    });

    it('should return empty array if array is empty', () => {
      const data: number[] = filterEven([]);
      expect(data).toEqual([]);
    });
  });

  describe('Sum Tests', () => {
    it('should return sum of all numbers in an array', () => {
      const data: number = sum([1, 2, 3, 4]);
      expect(data).toBe(10);
    });
    it('should return 0 if array is empty', () => {
      const data: number = sum([]);

      expect(data).toBe(0);
    });
  });
  describe('Average Tests', () => {
    it('should return average of all the numbers in an array', () => {
      const data: number = average([1, 2, 3]);
      expect(data).toBe(2);
    });
    it('should return NAN if array is empty', () => {
      const data: number = average([]);
      expect(data).toEqual(NaN);
    });
  });
});

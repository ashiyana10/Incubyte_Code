import { add } from './stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });
  it('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });
  it('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
  });
});

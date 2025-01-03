import { add, addThrowNegativeNumber, addWithCustomDelimiters, addWithNewLineBetweenNumbers } from './stringCalculator';

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
  it('should return the sum of multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
  });
  it('should handle newlines as delimiters', () => {
    expect(addWithNewLineBetweenNumbers("1\n2,3")).toBe(6);
  });
  it('should support custom delimiters', () => {
    expect(addWithCustomDelimiters("//;\n1;2")).toBe(3);
    expect(addWithCustomDelimiters("//|\n3|4|5")).toBe(12);
  });
  it('should throw an exception for negative numbers', () => {
    expect(() => addThrowNegativeNumber("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => addThrowNegativeNumber("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
  });  
});

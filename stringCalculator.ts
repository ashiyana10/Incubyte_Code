export function add(numbers: string): number {
  // empty string
  if (!numbers) {
    return 0;
  }
  // single number
  if (!numbers.includes(",")) {
    return parseInt(numbers, 10);
  }
  // two or more numbers
  const nums = numbers.split(",").map((n) => parseInt(n, 10));
  return nums.reduce((sum, num) => sum + num, 0);
}

export function addWithNewLineBetweenNumbers(numbers: string): number {
  // empty string
  if (!numbers) {
    return 0;
  }
  const normalized = numbers.replace(/\n/g, ",");
  const nums = normalized.split(",").map((n) => parseInt(n, 10));
  return nums.reduce((sum, num) => sum + num, 0);
}

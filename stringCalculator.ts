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

export function addWithCustomDelimiters(numbers: string): number {
  // empty string
  if (!numbers) {
    return 0;
  }

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2);
    numbers = parts[1];
  }

  const normalized = numbers.replace(/\n/g, delimiter);
  const nums = normalized.split(delimiter).map((n) => parseInt(n, 10));
  return nums.reduce((sum, num) => sum + num, 0);
}

export function addThrowNegativeNumber(numbers: string): number {
  // empty string
  if (!numbers) {
    return 0;
  }

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2);
    numbers = parts[1];
  }

  const normalized = numbers.replace(/\n/g, delimiter);
  const nums = normalized.split(delimiter).map((n) => parseInt(n, 10));

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

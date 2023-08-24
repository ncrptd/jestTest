export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function double(arr: number[]) {
  return arr.map((num) => num * 2);
}

export function filterEven(arr: number[]) {
  return arr.filter((num) => num % 2 === 0);
}

export function sum(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

export function average(arr: number[]) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

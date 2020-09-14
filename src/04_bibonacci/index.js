export const fibonacci = (n) => {
  if (typeof n !== "number" || n < 0 || isNaN(n)) {
    throw new Error("n should be a integer >= 0");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

export const fibonacciIterator = () => {
  let arr = [1, 1];
  let index = 0;
  return {
    next() {
      let current = arr[index];
      if (!current) {
        current = arr[index - 1] + arr[index - 2];
        arr.push(current);
      }
      index++;
      return current;
    },
  };
};

export function* fibonacciCandy() {
  let arr = [1, 1];
  let index = 0;
  while (true) {
    let current = arr[index];
    if (!current) {
      current = arr[index - 1] + arr[index - 2];
      arr.push(current);
    }
    index++;
    yield current;
  }
}

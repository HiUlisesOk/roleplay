export const MultiplesOf = (num1: number, num2: number) => {
  if (num1 % num2 === 0) {
    return true;
  }
  return false;
};

export const isPair = (num: number) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const maxPairIndex = (array: Array<object>) => {
  let maxPairIndexNumber = 0;

  array.forEach((element, index) => {
    if (isPair(index)) {
      maxPairIndexNumber = index;
    }
  });

  return maxPairIndexNumber;
};

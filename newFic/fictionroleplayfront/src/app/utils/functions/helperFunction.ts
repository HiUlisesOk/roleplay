import { MultiplesOf } from "./MathFunctions";

export const cardsLimit = (isExpanded: boolean, array: Array<object>) => {
  let Limit = 0;
  const multiple = isExpanded ? 4 : 5;
  array.forEach((element, index) => {
    if (MultiplesOf(index, multiple)) {
      Limit = index;
    }
  });
  return Limit;
};

import { subDays } from "date-fns";

export const subtractDaysToDate = (date, totalDays) => {
  return subDays(date, totalDays);
};

export const removeGTM = (date) => {
  return new Date(date.split(" ")[0]);
};

export const removeSymbol = (symbol, text) => {
  return text.replace(symbol, "");
};

export const calculateThreeRule = (leftNumber, rightNumber) => {
  return Number(
    ((leftNumber - rightNumber) * 100) / (rightNumber > 0 ? rightNumber : 1)
  ).toFixed(0);
};

export const relativeDifference = (leftNumber, rightNumber) => {
  return leftNumber < rightNumber
    ? `-${calculateThreeRule(rightNumber, leftNumber)}%`
    : `+${calculateThreeRule(leftNumber, rightNumber)}%`;
};

export const filterByKey = (data, key, value) => {
  return {
    currentPeriod: data.currentPeriod.filter((item) => item[key] === value),
    previousPeriod: data.previousPeriod.filter((item) => item[key] === value),
  };
};

export const sumDataByKey = (data, key) => {
  const hashData = {};
  data.forEach((item) => {
    if (item[key]) {
      if (!hashData[`${item[key]}`]) {
        hashData[`${item[key]}`] = 1;
      } else {
        hashData[`${item[key]}`] += 1;
      }
    }
  });
  return Object.keys(hashData).map((keyValue) => {
    return { value: hashData[keyValue], name: keyValue };
  });
};

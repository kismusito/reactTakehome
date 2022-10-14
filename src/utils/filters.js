import { isWithinInterval } from "date-fns";

import {
  filterByKey,
  relativeDifference,
  removeGTM,
  removeSymbol,
  subtractDaysToDate,
  sumDataByKey,
} from "./helpers";

import followersData from "../data/userFollowersData";
import salesData from "../data/userSalesData";

const filterByDate = (data, key, totalDays = 0) => {
  const currentDate = new Date();
  const comparableDate =
    totalDays > 0 && subtractDaysToDate(currentDate, totalDays);
  const previousComparableDate =
    comparableDate && subtractDaysToDate(comparableDate, totalDays);

  return data
    .filter((item) => item[key])
    .sort((a, b) => removeGTM(b[key]) - removeGTM(a[key]))
    .reduce(
      (previousValue, currentValue) => {
        if (!comparableDate) {
          return {
            ...previousValue,
            currentPeriod: [...previousValue.currentPeriod, currentValue],
          };
        }

        if (
          isWithinInterval(new Date(removeGTM(currentValue[key])), {
            start: comparableDate,
            end: currentDate,
          })
        ) {
          return {
            ...previousValue,
            currentPeriod: [...previousValue.currentPeriod, currentValue],
          };
        }

        if (
          isWithinInterval(removeGTM(currentValue[key]), {
            start: previousComparableDate,
            end: comparableDate,
          })
        ) {
          return {
            ...previousValue,
            previousPeriod: [...previousValue.previousPeriod, currentValue],
          };
        }

        return previousValue;
      },
      { currentPeriod: [], previousPeriod: [] }
    );
};

const getTotalEarning = (sales) => {
  let current = 0;
  let previous = 0;

  sales.currentPeriod.forEach((sale) => {
    current += Number(removeSymbol("$", sale?.amount || ""));
  });

  sales.previousPeriod.forEach((sale) => {
    previous += Number(removeSymbol("$", sale?.amount || ""));
  });

  return {
    current: `$${current.toFixed(2)}`,
    previous: `$${previous.toFixed(2)}`,
    difference: relativeDifference(current, previous),
  };
};

const getTotalFollowers = (followers) => {
  let current = 0;
  let previous = 0;

  followers.currentPeriod.forEach(() => {
    current += 1;
  });

  followers.previousPeriod.forEach(() => {
    previous += 1;
  });

  return {
    current,
    previous,
    followers: followers.currentPeriod,
    ages: sumDataByKey(followers.currentPeriod, "age"),
    difference: relativeDifference(current, previous),
  };
};

export const getData = (totalDays = 0) => {
  const followersItems = filterByDate(
    followersData.followers,
    "followed",
    totalDays
  );
  const salesItems = filterByDate(
    salesData.transactions,
    "datePosted",
    totalDays
  );

  return {
    earnings: getTotalEarning(salesItems),
    donationEarnings: getTotalEarning(
      filterByKey(salesItems, "tag", "donation")
    ),
    subscriptionEarnings: getTotalEarning(
      filterByKey(salesItems, "tag", "monthlySubscription")
    ),
    marketplaceEarnings: getTotalEarning(
      filterByKey(salesItems, "tag", "marketplaceSale")
    ),
    transactions: salesItems.currentPeriod,
    followers: getTotalFollowers(followersItems),
  };
};

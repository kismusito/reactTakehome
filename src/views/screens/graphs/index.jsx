import React, { Fragment, useContext } from "react";

import DataBlock from "../../ui/data-block";

import styles from "./index.module.css";

import { removeSymbol } from "../../../utils/helpers";
import CustomPieChart from "../../ui/graphs/pie-chart";
import CustomLineChart from "../../ui/graphs/line-chart";
import DataGraph from "../../ui/data-graph";
import { DataContext } from "../dashboard";

export const Graphs = () => {
  const { data } = useContext(DataContext);

  return (
    <Fragment>
      <div className={styles.container}>
        <DataGraph title="Earning types">
          <CustomPieChart
            data={[
              {
                value: Number(
                  removeSymbol("$", data?.donationEarnings?.current || "0")
                ),
                name: "Donation earnings",
              },
              {
                value: Number(
                  removeSymbol("$", data?.subscriptionEarnings?.current || "0")
                ),
                name: "Subscription earnings",
              },
              {
                value: Number(
                  removeSymbol("$", data?.marketplaceEarnings?.current || "0")
                ),
                name: "Marketplace earnings",
              },
            ]}
          />
        </DataGraph>
        <DataGraph title="Followers ages">
          <CustomLineChart data={data?.followers?.ages || []} />
        </DataGraph>
      </div>

      <div className={styles.container}>
        <DataBlock
          percentage={data?.followers?.difference || ""}
          value={data?.followers?.current || 0}
          title="Followers"
        />
        <DataBlock
          percentage={data?.donationEarnings?.difference || ""}
          value={data?.donationEarnings?.current || ""}
          title="Donation earnings"
        />
        <DataBlock
          percentage={data?.subscriptionEarnings?.difference || ""}
          value={data?.subscriptionEarnings?.current || ""}
          title="Subscription earnings"
        />
        <DataBlock
          percentage={data?.marketplaceEarnings?.difference || ""}
          value={data?.marketplaceEarnings?.current || ""}
          title="Marketplace earnings"
        />
      </div>
    </Fragment>
  );
};

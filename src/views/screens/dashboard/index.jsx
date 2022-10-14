import React, { createContext, useEffect, useState } from "react";
import Tabs from "../../ui/tabs";

import styles from "./index.module.css";

import { Graphs } from "../graphs";
import { Transactions } from "../transactions";
import { Followers } from "../followers";
import { getData } from "../../../utils/filters";

export const DataContext = createContext();

export const Dashboard = () => {
  const [filter, setFilter] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(getData(filter));
  }, [filter]);

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <DataContext.Provider value={{ data, changeFilter }}>
      <div className={styles.container}>
        <Tabs
          data={[
            {
              key: 1,
              name: "graphs",
              title: "Graphs",
              component: <Graphs />,
            },
            {
              key: 2,
              name: "transactions",
              title: "Transactions",
              component: <Transactions />,
            },
            {
              key: 3,
              name: "followers",
              title: "Followers",
              component: <Followers />,
            },
          ]}
        />
      </div>
    </DataContext.Provider>
  );
};

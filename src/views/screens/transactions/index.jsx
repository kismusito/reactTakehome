import React, { Fragment, useContext } from "react";
import ScrollList from "../../ui/scroll-list";
import { GrTransaction } from "react-icons/gr";
import { DataContext } from "../dashboard";

export const Transactions = () => {
  const { data } = useContext(DataContext);

  return (
    <Fragment>
      <h2>Transactions</h2>
      <ScrollList
        data={data.transactions}
        keysToSearch={["from", "amount"]}
        icon={<GrTransaction />}
      />
    </Fragment>
  );
};

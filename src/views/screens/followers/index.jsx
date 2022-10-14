import React, { Fragment, useContext } from "react";
import ScrollList from "../../ui/scroll-list";
import { AiOutlineUserAdd } from "react-icons/ai";
import { DataContext } from "../dashboard";

export const Followers = () => {
  const { data } = useContext(DataContext);

  return (
    <Fragment>
      <h2>Followers</h2>
      <ScrollList
        data={data?.followers?.followers || []}
        keysToSearch={["name"]}
        icon={<AiOutlineUserAdd />}
      />
    </Fragment>
  );
};

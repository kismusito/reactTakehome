import React from "react";
import PropTypes from "prop-types";

import { EmptyData } from "../empty-data";

import styles from "./index.module.css";

const ScrollList = ({ data = [], keysToSearch = [], icon }) => {
  if (data.length === 0) {
    return <EmptyData />;
  }

  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <div className={styles["list-item"]} key={item._id}>
            {icon && <div className={styles.icon}>{icon}</div>}
            {keysToSearch.map((keyItem, index) => {
              return (
                <span key={`${keyItem}${item._id}`}>
                  {item[keyItem]} {index + 1 < keysToSearch.length && "- "}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

ScrollList.propTypes = {
  keysToSearch: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
  icon: PropTypes.node,
};

ScrollList.defaultProps = {
  icon: null,
};

export default ScrollList;

import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const DataBlock = ({ percentage, value, title, icon }) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <div className={styles.value}>
        <p>{value}</p>
        <span className={percentage.includes("+") ? styles.up : styles.down}>
          {percentage}
        </span>
      </div>

      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

DataBlock.propTypes = {
  percentage: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

DataBlock.defaultProps = {
  icon: null,
};

export default DataBlock;

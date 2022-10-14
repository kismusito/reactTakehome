import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const DataGraph = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

DataGraph.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default DataGraph;

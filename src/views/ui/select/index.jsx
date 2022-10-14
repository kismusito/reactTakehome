import React from "react";
import PropTypes from "prop-types";

import styles from './index.module.css'

const Select = ({ action, data, placeholder }) => {
  return (
    <select onChange={action} className={styles.container}>
      <option value="" className={styles.option}>{placeholder}</option>
      {data.map((item) => (
        <option key={item.value} value={item.value} className={styles.option}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  action: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
    })
  ).isRequired,
};

Select.defaultProps = {
  placeholder: "Filter by",
};

export default Select;

import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import Select from "../select";
import { DataContext } from "../../screens/dashboard";
import { filterRangeDate } from "../../../utils/enums/filter-range-date";

const Tabs = ({ data = [] }) => {
  const [currentComponent, setCurrentComponent] = useState(data[0].name || "");
  const { changeFilter } = useContext(DataContext);

  const getComponent = () => {
    const findItem = data.find((item) => item.name === currentComponent);
    if (findItem) {
      return findItem.component || null;
    }

    return null;
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles["tab-container"]}`}>
          {data.map((item) => (
            <div
              key={item.key}
              onClick={() => setCurrentComponent(item.name)}
              className={`${styles["tab-item"]} ${
                item.name === currentComponent && styles["tab-item-active"]
              }`}
            >
              {item.icon && item.icon}
              {item.title}
            </div>
          ))}
        </div>

        <div className={styles["filter-container"]}>
          <Select action={changeFilter} data={filterRangeDate} />
        </div>
      </div>

      <div>{getComponent()}</div>
    </div>
  );
};

Tabs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.node,
      component: PropTypes.element,
    })
  ).isRequired,
};

export default Tabs;

import React from "react";
import { ImFilesEmpty } from "react-icons/im";

import styles from './index.module.css'

export const EmptyData = () => {
  return (
    <div className={styles.container}>
      <ImFilesEmpty fontSize={30} />
      <p>No data to show</p>
    </div>
  );
};

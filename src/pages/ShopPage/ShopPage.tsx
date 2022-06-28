import React from "react";
import { withContainer } from "../../hoc/withContainer";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  return (
    <div className="_container">
      <div className={styles.ShopPage}>Shop</div>
    </div>
  );
};

export default withContainer(ShopPage);

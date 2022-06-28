import React from "react";
import { withContainer } from "../../hoc/withContainer";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className="footer__container">Footer</div>
    </div>
  );
};

export default withContainer(Footer);

import React, { FC } from "react";
import { ProductSelectors } from "../../hooks/useProductSelectors";
import Bottom from "./Bottom/Bottom";
import styles from "./Header.module.css";
import Middle from "./Middle/Middle";
import Top from "./Top/Top";

interface HeaderProps {
  selectors: ProductSelectors;
}

const Header: FC<HeaderProps> = (props) => {
  // TODO: state
  const isAuth = false;

  return (
    <div className={styles.Header}>
      <section className={styles.top}>
        <Top isAuth={isAuth} />
      </section>

      <section className={styles.middle}>
        <Middle />
      </section>

      <section className={styles.bottom}>
        <Bottom selectors={props.selectors} />
      </section>
    </div>
  );
};

export default Header;

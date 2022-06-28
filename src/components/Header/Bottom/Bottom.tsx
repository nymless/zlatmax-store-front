import React, { FC } from "react";
import { withContainer } from "../../../hoc/withContainer";
import { ProductSelectors } from "../../../hooks/useProductSelectors";
import { Dropdown } from "../../Dropdown/Dropdown";
import styles from "./Bottom.module.css";

interface BottomProps {
  selectors: ProductSelectors;
}

const Bottom: FC<BottomProps> = (props) => (
  <div className={styles.Bottom}>
    <Dropdown selectors={props.selectors} />
  </div>
);

export default withContainer(Bottom);

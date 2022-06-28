import React, { FC } from "react";
import { withContainer } from "../../../hoc/withContainer";
import styles from "./Middle.module.css";

interface MiddleProps {}

const Middle: FC<MiddleProps> = () => <div className={styles.Middle}>Logo</div>;

export default withContainer(Middle);

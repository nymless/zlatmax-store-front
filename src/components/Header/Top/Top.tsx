import React, { FC } from "react";
import { withContainer } from "../../../hoc/withContainer";
import { Login } from "../../Login/Login";
import { Nav } from "../../Nav/Nav";
import { User } from "../../User/User";
import styles from "./Top.module.css";

interface TopProps {
  isAuth: boolean
}

const Top: FC<TopProps> = (props) => (
  <div className={styles.Top}>
    <Nav />
    {props.isAuth ? <User /> : <Login />}
  </div>
);

export default withContainer(Top);

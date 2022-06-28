import React from "react";
import s from "./User.module.css";
import { Link } from "react-router-dom";
import user from "./user.svg";

export const User = () => {
  return (
    <Link className={s.link} to="/user">
      <img src={user} alt="user" />
      Личный кабинет
    </Link>
  );
};

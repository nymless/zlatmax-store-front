import React from "react";
import s from "./Login.module.css";
import { Link } from "react-router-dom";
import user from "./user.svg";

export const Login = () => {
  return (
    <Link className={s.link} to="/login">
      <img src={user} alt="user" />
      Войти
    </Link>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import s from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <Link to="/about" className={s.link}>О нас</Link>
      <Link to="/payment-and-delivery" className={s.link}>Оплата и доставка</Link>
      <Link to="/news" className={s.link}>Новости</Link>
      <Link to="/contacts" className={s.link}>Контакты</Link>
    </nav>
  );
};

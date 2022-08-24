import React from "react";
import { Link } from "react-router-dom";
import s from "./Nav.module.css";
import { AppRouts } from '../../variables/AppRouts';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <Link to={AppRouts.ABOUT} className={s.link}>О нас</Link>
      <Link to={AppRouts.PAYMENT} className={s.link}>Оплата и доставка</Link>
      <Link to={AppRouts.NEWS} className={s.link}>Новости</Link>
      <Link to={AppRouts.CONTACTS} className={s.link}>Контакты</Link>
    </nav>
  );
};

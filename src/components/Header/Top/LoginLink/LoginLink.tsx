import React from 'react';
import s from './LoginLink.module.css';
import { Link } from 'react-router-dom';
import user from '../../../../assets/svg/avatar.svg';
import { AppRouts } from '../../../../variables/AppRouts';

export const LoginLink = () => {
  return (
    <Link className={s.link} to={AppRouts.LOGIN}>
      <img src={user} alt="users" />
      Войти
    </Link>
  );
};

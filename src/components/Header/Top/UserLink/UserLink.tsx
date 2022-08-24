import React from 'react';
import s from './UserLink.module.css';
import { Link } from 'react-router-dom';
import user from './user.svg';
import { AppRouts } from '../../../../variables/AppRouts';

export const UserLink = () => {
  return (
    <Link className={s.link} to={AppRouts.ACCOUNT}>
      <img src={user} alt="users" />
      Личный кабинет
    </Link>
  );
};

import React, { FC } from 'react';
import s from './SelectorCard.module.css';
import { Link } from 'react-router-dom';
import { AppPaths } from '../../variables/AppPaths';

type Props = {
  route: string;
  name: string;
  img: string;
  id: number;
};

export const SelectorCard: FC<Props> = (props) => {
  return (
    <Link className={s.card} to={props.route + '/' + props.id}>
      <img
        className={s.img}
        src={AppPaths.STATIC_URL + props.img}
        alt={'Изображение ' + props.name}
      />
      <div className={s.name}>{props.name}</div>
    </Link>
  );
};

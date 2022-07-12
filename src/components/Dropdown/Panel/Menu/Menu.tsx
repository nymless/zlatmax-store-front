import React from 'react';
import s from './Menu.module.css';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  list: { id: number; name: string }[];
  onClickHandler: (id: number) => void;
  handleHeaderClick: () => void;
  path: string;
};

export const Menu: React.FC<Props> = (props) => {
  return (
    <div className={s.menu}>
      <Link
        className={s.heading}
        to={props.path}
        onClick={() => props.handleHeaderClick()}
      >
        {props.name}
      </Link>
      <div className={s.body}>
        {props.list.map((item) => {
          return (
            <Link
              className={s.link}
              key={item.id}
              to={props.path + '/' + item.id}
              onClick={() => props.onClickHandler(item.id)}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

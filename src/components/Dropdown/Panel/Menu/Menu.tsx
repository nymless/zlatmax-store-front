import React from 'react';
import s from './Menu.module.css';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  list: { id: number; name: string }[];
  onClickHandler: () => void;
  handleHeaderClick: () => void;
  path: string;
  prefix?: string;
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
          let name = item.name;
          if (props.prefix) {
            name = props.prefix + ' ' + item.name;
          }
          return (
            <Link
              className={s.link}
              key={item.id}
              to={props.path + '/' + item.id}
              onClick={props.onClickHandler}
            >
              {name}
            </Link>
          );
        })}
      </div>
      <Link
        className={s.footer}
        to={props.path}
        onClick={() => props.handleHeaderClick()}
      >
        Смотреть все
      </Link>
    </div>
  );
};

import React, { FC, PropsWithChildren } from 'react';
import styles from './CatalogCard.module.css';
import { Link } from 'react-router-dom';

type CatalogCardProps = {
  route: string;
  name: string;
  list: { id: number; name: string }[];
};

export const CatalogCard: FC<PropsWithChildren<CatalogCardProps>> = (props) => {
  return (
    <Link className={styles.CatalogCard} to={props.route}>
      <h3 className={styles.name}>{props.name}</h3>
      <ul className={styles.list}>
        {props.list.map((item) => {
          return (
            <li key={item.id}>
              <span className={styles.item}>{item.name}</span>
            </li>
          );
        })}
      </ul>
      {props.children}
    </Link>
  );
};

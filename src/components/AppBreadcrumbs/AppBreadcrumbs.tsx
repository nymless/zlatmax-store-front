import React, { FC } from 'react';
import styles from './AppBreadcrumbs.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

interface AppBreadcrumbsProps {
  linkName: string;
  linkRoute: string;
  pageName: string;
}

export const AppBreadcrumbs: FC<AppBreadcrumbsProps> = (props) => {
  return (
    <Breadcrumbs
      className={styles.AppBreadcrumbs}
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link className={styles.link} to="/">
        Главная
      </Link>
      <Link className={styles.link} to={props.linkRoute}>
        {props.linkName}
      </Link>
      <span className={styles.page}>{props.pageName}</span>
    </Breadcrumbs>
  );
};

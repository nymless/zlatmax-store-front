import React, { FC } from 'react';
import styles from './AppBreadcrumbs.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface AppBreadcrumbsProps {
  linkName: string;
  linkRoute: string;
  pageName: string;
}

export const AppBreadcrumbs: FC<AppBreadcrumbsProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  return (
    <div
      className={styles.AppBreadcrumbs}
      role="presentation"
      onClick={handleClick}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Главная
        </Link>
        <Link underline="hover" color="inherit" href={props.linkRoute}>
          {props.linkName}
        </Link>
        <Typography color="text.primary">{props.pageName}</Typography>
      </Breadcrumbs>
    </div>
  );
};

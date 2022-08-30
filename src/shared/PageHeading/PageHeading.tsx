import React, { FC, PropsWithChildren } from 'react';
import styles from './PageHeading.module.scss';

interface PageHeadingProps {}

const PageHeading: FC<PropsWithChildren<PageHeadingProps>> = (props) => (
  <div className={styles.PageHeading} data-testid="PageHeading">
    {props.children}
  </div>
);

export default PageHeading;

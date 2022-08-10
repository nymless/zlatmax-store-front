import React, { FC } from 'react';
import styles from './TopSellers.module.css';
import { withContainer } from '../../../hoc/withContainer';

interface TopSellersProps {}

const TopSellers: FC<TopSellersProps> = () => (
  <div className={styles.TopSellers}>TopSellers Component</div>
);

export default withContainer(TopSellers);

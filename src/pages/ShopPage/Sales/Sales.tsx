import React, { FC } from 'react';
import styles from './Sales.module.css';
import { withContainer } from '../../../hoc/withContainer';

interface SalesProps {}

const Sales: FC<SalesProps> = () => (
  <div className={styles.Sales}>Sales Component</div>
);

export default withContainer(Sales);

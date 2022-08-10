import React, { FC } from 'react';
import styles from './NewProducts.module.css';
import { withContainer } from '../../../hoc/withContainer';

interface NewProductsProps {}

const NewProducts: FC<NewProductsProps> = () => (
  <div className={styles.NewProducts}>NewProducts Component</div>
);

export default withContainer(NewProducts);

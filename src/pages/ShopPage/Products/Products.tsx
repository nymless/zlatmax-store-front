import React, { FC } from 'react';
import styles from './Products.module.css';
import { withContainer } from '../../../hoc/withContainer';

interface ProductsProps {}

const Products: FC<ProductsProps> = () => (
  <div className={styles.Products}>Products Component</div>
);

export default withContainer(Products);

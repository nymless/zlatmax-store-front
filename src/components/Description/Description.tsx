import React, { FC } from 'react';
import { ProductModelForProductPage } from '../../redux/types';
import styles from './Description.module.css';

interface DescriptionProps {
  product: ProductModelForProductPage;
}

const Description: FC<DescriptionProps> = (props) => (
  <div className={styles.Description}>
    Description Component
  </div>
);

export default Description;

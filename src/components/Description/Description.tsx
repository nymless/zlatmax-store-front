import React, { FC } from 'react';
import { ProductModelForProductPage } from '../../redux/services/types';
import styles from './Description.module.css';

interface DescriptionProps {
  productModel: ProductModelForProductPage;
}

const Description: FC<DescriptionProps> = (props) => (
  <div className={styles.Description}>
    Description Component
  </div>
);

export default Description;

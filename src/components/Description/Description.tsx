import React, { FC } from 'react';
import { ProductModelForPage } from '../../redux/services/types';
import styles from './Description.module.css';

interface DescriptionProps {
  product: ProductModelForPage;
}

const Description: FC<DescriptionProps> = (props) => (
  <div className={styles.Description}>
    Description Component
  </div>
);

export default Description;

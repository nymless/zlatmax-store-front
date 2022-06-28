import React, { FC } from 'react';
import { ExtendedProductModel } from '../../redux/types';
import styles from './Description.module.css';

interface DescriptionProps {
  product: ExtendedProductModel;
}

const Description: FC<DescriptionProps> = (props) => (
  <div className={styles.Description}>
    Description Component
  </div>
);

export default Description;

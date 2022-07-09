import React, { FC } from 'react';
import { ModelExtended } from '../../redux/types';
import styles from './Description.module.css';

interface DescriptionProps {
  product: ModelExtended;
}

const Description: FC<DescriptionProps> = (props) => (
  <div className={styles.Description}>
    Description Component
  </div>
);

export default Description;

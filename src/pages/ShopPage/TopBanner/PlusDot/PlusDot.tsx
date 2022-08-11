import React, { FC } from 'react';
import styles from './PlusDot.module.css';

interface PlusDotProps {}

const PlusDot: FC<PlusDotProps> = () => {
  return (
    <div className={styles.PlusDot}>
      <div className={styles.inner}>+</div>
    </div>
  );
};

export default PlusDot;

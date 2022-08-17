import React, { FC } from 'react';
import styles from './Compare.module.css';
import compareImg from './compare.svg';
import compareHoveredImg from './compare-hovered.svg';

interface CompareProps {}

const Compare: FC<CompareProps> = () => (
  <div className={styles.compare}>
    <img src={compareImg} alt="Add to compare icon" />
    <img
      className={styles.hovered}
      src={compareHoveredImg}
      alt="Add to compare icon"
    />
  </div>
);

export default Compare;

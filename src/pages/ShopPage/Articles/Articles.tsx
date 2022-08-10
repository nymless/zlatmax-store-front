import React, { FC } from 'react';
import styles from './Articles.module.css';
import { withContainer } from '../../../hoc/withContainer';

interface ArticlesProps {}

const Articles: FC<ArticlesProps> = () => (
  <div className={styles.Articles}>Articles Component</div>
);

export default withContainer(Articles);

import React, { FC } from 'react';
import { withContainer } from '../../../hoc/withContainer';
import styles from './Middle.module.css';
import logo from './logo.svg';

interface MiddleProps {}

const Middle: FC<MiddleProps> = () => (
  <div className={styles.Middle}>
    <img src={logo} alt="Zlatmax Logo" />
  </div>
);

export default withContainer(Middle);

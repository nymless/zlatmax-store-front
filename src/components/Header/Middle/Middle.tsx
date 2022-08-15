import React, { FC } from 'react';
import { withContainer } from '../../../hoc/withContainer';
import styles from './Middle.module.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

interface MiddleProps {}

const Middle: FC<MiddleProps> = () => (
  <div className={styles.Middle}>
    <Link to={'/'}>
      <img className={styles.logo} src={logo} alt="Zlatmax Logo" />
    </Link>
  </div>
);

export default withContainer(Middle);

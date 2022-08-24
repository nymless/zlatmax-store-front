import React, { FC } from 'react';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';
import styles from './Middle.module.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

interface MiddleProps {}

const Middle: FC<MiddleProps> = () => (
  <AppContainer>
    <div className={styles.Middle}>
      <Link to={'/'}>
        <img className={styles.logo} src={logo} alt="Zlatmax Logo" />
      </Link>
    </div>
  </AppContainer>
);

export default Middle;

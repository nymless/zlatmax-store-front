import React, { FC } from 'react';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';
import { LoginLink } from './LoginLink/LoginLink';
import { Nav } from '../../Nav/Nav';
import { UserLink } from './UserLink/UserLink';
import styles from './Top.module.css';

interface TopProps {
  isAuth: boolean;
}

const Top: FC<TopProps> = (props) => (
  <AppContainer>
    <div className={styles.Top}>
      <Nav />
      {props.isAuth ? <UserLink /> : <LoginLink />}
    </div>
  </AppContainer>
);

export default Top;

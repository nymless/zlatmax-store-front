import React, { FC } from 'react';
import { AppContainer } from '../../../shared/AppContainer/AppContainer';
import { LoginLink } from './LoginLink/LoginLink';
import { Nav } from './Nav/Nav';
import { UserMenu } from './UserMenu/UserMenu';
import styles from './Top.module.css';
import { useAppSelector } from '../../../redux/store';

interface TopProps {}

const Top: FC<TopProps> = (props) => {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <AppContainer>
      <div className={styles.Top}>
        <Nav />
        {user ? <UserMenu user={user} /> : <LoginLink />}
      </div>
    </AppContainer>
  );
};

export default Top;

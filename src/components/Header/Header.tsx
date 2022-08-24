import React, { FC } from 'react';
import Bottom from './Bottom/Bottom';
import styles from './Header.module.css';
import Middle from './Middle/Middle';
import Top from './Top/Top';
import { useAppSelector } from '../../redux/store';

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  const isAuth = useAppSelector((state) => Boolean(state.userState.user))

  return (
    <div className={styles.Header}>
      <section className={styles.top}>
        <Top isAuth={isAuth} />
      </section>

      <section className={styles.middle}>
        <Middle />
      </section>

      <section className={styles.bottom}>
        <Bottom />
      </section>
    </div>
  );
};

export default Header;

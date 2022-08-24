import React, { FC } from 'react';
import styles from './LoginPage.module.scss';
import { AppContainer } from '../../shared/AppContainer/AppContainer';
import LoginForm from './LoginForm/LoginForm';
import PageHeading from '../../shared/PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { AppRouts } from '../../variables/AppRouts';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <AppContainer>
      <div className={styles.LoginPage} data-testid="LoginPage">
        <PageHeading>Авторизация</PageHeading>
        <div className={styles.loginBlock}>
          <div className={styles.form}>
            <LoginForm />
          </div>
          <div className={styles.extras}>
            <p>
              {'Утерян пароль? '}
              <Link className={styles.link} to={AppRouts.RECOVER}>
                Восстановить.
              </Link>
            </p>
            <p>
              {'Нет аккаунта? '}
              <Link className={styles.link} to={AppRouts.REGISTRATION}>
                Зарегистрироваться.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default LoginPage;

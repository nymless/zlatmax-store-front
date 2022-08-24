import React, { FC } from 'react';
import styles from './RegistrationPage.module.scss';
import { AppContainer } from '../../shared/AppContainer/AppContainer';
import PageHeading from '../../shared/PageHeading/PageHeading';
import RegistrationForm from './RegistrationForm/RegistrationForm';

interface RegistrationPageProps {}

const RegistrationPage: FC<RegistrationPageProps> = () => {
  return (
    <AppContainer>
      <div className={styles.RegistrationPage} data-testid="RegistrationPage">
        <PageHeading>Регистрация</PageHeading>
        <div className={styles.registrationBlock}>
          <div className={styles.form}>
            <RegistrationForm />
          </div>
          <div className={styles.extras}>
            <p className={styles.text}>
              Поля, отмеченные знаком <span className={styles.bold}>*</span>,
              <span className={styles.bold}> обязательны к заполнению</span>.
            </p>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default RegistrationPage;

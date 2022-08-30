import React, { FC } from 'react';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';
import { AppContainer } from '../AppContainer/AppContainer';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import Button from '../Button/Button';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  useScrollToTop();

  const navigate = useNavigate();

  return (
    <AppContainer>
      <div className={styles.NotFound}>
        <h2 className={styles.text}>Страница не найдена.</h2>
        <div className={styles.button}>
          <Button onClick={() => navigate(-1)}>Вернуться назад</Button>
        </div>
      </div>
    </AppContainer>
  );
};

export default NotFound;

import React, { FC } from 'react';
import styles from './UnderConstruction.module.css';
import { useNavigate } from 'react-router-dom';
import { AppContainer } from '../AppContainer/AppContainer';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import Button from '../Button/Button';

interface UnderConstructionProps {}

const UnderConstruction: FC<UnderConstructionProps> = () => {
  useScrollToTop();

  const navigate = useNavigate();

  return (
    <AppContainer>
      <div className={styles.UnderConstruction}>
        <h2 className={styles.text}>Страница в разработке.</h2>
        <div className={styles.button}>
          <Button onClick={() => navigate(-1)}>Вернуться назад</Button>
        </div>
      </div>
    </AppContainer>
  );
};

export default UnderConstruction;

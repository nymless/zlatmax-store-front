import React, { FC } from 'react';
import styles from './CategoriesPage.module.css';
import { SelectorCard } from '../../shared/SelectorCard/SelectorCard';
import { AppContainer } from '../../shared/AppContainer/AppContainer';
import { useGetCategoriesQuery } from '../../redux/api/productDetailsApi';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import PageHeading from '../../shared/PageHeading/PageHeading';

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  useScrollToTop();

  const categories = useGetCategoriesQuery().data;

  return (
    <AppContainer>
      <div className={styles.CategoriesPage}>
        <PageHeading>Категория ножей</PageHeading>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link className={styles.link} to="/">
              Главная
            </Link>
            <span className={styles.page}>Категория ножей</span>
          </Breadcrumbs>
        </div>
        <div className={styles.body}>
          {categories &&
            categories.map((category) => {
              return (
                <SelectorCard
                  key={category.id}
                  route="/category"
                  name={category.name}
                  img={category.img}
                  id={category.id}
                />
              );
            })}
        </div>
      </div>
    </AppContainer>
  );
};

export default CategoriesPage;

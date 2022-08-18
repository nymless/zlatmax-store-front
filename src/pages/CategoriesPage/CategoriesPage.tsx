import React, { FC } from 'react';
import styles from './CategoriesPage.module.css';
import { SelectorCard } from '../../shared/SelectorCard/SelectorCard';
import { withContainer } from '../../hoc/withContainer';
import { useGetCategoriesQuery } from '../../redux/services/productDetailsApi';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  useScrollToTop();

  const categories = useGetCategoriesQuery().data;

  return (
    <div className={styles.CategoriesPage}>
      <div className={styles.heading}>Категория ножей</div>
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
  );
};

export default withContainer(CategoriesPage);

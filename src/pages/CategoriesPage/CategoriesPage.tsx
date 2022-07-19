import React, { FC } from 'react';
import styles from './CategoriesPage.module.css';
import { SelectorCard } from '../../components/SelectorCard/SelectorCard';
import { withContainer } from '../../hoc/withContainer';
import { useGetCategoriesQuery } from '../../redux/services/productDetailsApi';

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  const categories = useGetCategoriesQuery().data;

  return (
    <div className={styles.CategoriesPage}>
      <div className={styles.heading}>Категория ножей</div>
      <div className={styles.breadcrumbs}>Breadcrumbs...</div>
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

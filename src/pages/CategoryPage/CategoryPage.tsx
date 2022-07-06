import React, { FC } from 'react';
import styles from './CategoryPage.module.css';
import { SelectorCard } from '../../components/SelectorCard/SelectorCard';
import { ProductSelectors } from '../../hooks/useProductSelectors';
import { useGetCategoriesQuery } from '../../redux/services/productsApi';
import { withContainer } from '../../hoc/withContainer';

interface CategoryPageProps {
  selectors: ProductSelectors;
}

const CategoryPage: FC<CategoryPageProps> = (props) => {
  const categories = useGetCategoriesQuery().data;

  const onClickHandler = (id: number) => {
    props.selectors.setCategoryId(id);
  };

  return (
    <div className={styles.CategoryPage}>
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
                onClickHandler={onClickHandler}
              />
            );
          })}
      </div>
    </div>
  );
};

export default withContainer(CategoryPage);

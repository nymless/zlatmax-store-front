import React, { FC } from 'react';
import styles from './Products.module.css';
import { ProductCard } from '../../../shared/ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';
import { GetProductsResponse } from '../../../redux/models/types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../redux/store';

interface ProductsProps {
  products?: GetProductsResponse;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  queryParamName: string;
  queryParamValue: string;
  currentPage: number;
  pagesCount: number | null;
  handlePagination: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const Products: FC<ProductsProps> = (props) => {
  const user = useAppSelector((state) => state.userState.user);

  if (props.isLoading) {
    return <div className={styles.Products}>Данные загружаются</div>;
  }

  if (props.error) {
    return <div className={styles.Products}>Ошибка загрузки данных</div>;
  }

  if (!props.products?.rows?.length) {
    return (
      <div className={styles.Products}>
        Нет товаров соответсвующих выбранным параметрам
      </div>
    );
  }

  return (
    <div className={styles.Products}>
      <div className={styles.products}>
        {props.products.rows.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            userId={user?.id}
            scaleOnHover={true}
            shadowOnHover={true}
          />
        ))}
      </div>
      <div className={styles.paginator}>
        {props.pagesCount && (
          <Pagination
            onChange={props.handlePagination}
            page={props.currentPage}
            count={props.pagesCount}
          />
        )}
      </div>
    </div>
  );
};

export default Products;

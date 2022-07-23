import React, { FC } from 'react';
import styles from './Products.module.css';
import { ProductCard } from '../../../components/ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';
import { GetProductsResponse } from '../../../redux/services/types';
import { useGetUserQuery } from '../../../redux/services/userApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useAppPagination } from '../../../hooks/useAppPagination';

interface ProductsProps {
  products?: GetProductsResponse;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  queryParamName: string;
  queryParamValue: string;
  searchParams: URLSearchParams;
}

const Products: FC<ProductsProps> = (props) => {
  const { currentPage, handlePagination, pagesCount } = useAppPagination(
    props.searchParams,
    props.products?.count
  );

  const user = useGetUserQuery().data;

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
          <ProductCard key={product.id} product={product} userId={user?.id} />
        ))}
      </div>
      <div className={styles.paginator}>
        {pagesCount && (
          <Pagination
            onChange={handlePagination}
            page={currentPage}
            count={pagesCount}
          />
        )}
      </div>
    </div>
  );
};

export default Products;

import React, { FC, PropsWithChildren } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useGetProductModelsByParamsQuery } from '../../redux/services/productsApi';
import styles from './ProductsPage.module.css';
import { useSearchParams } from 'react-router-dom';
import ProductFilterForm from '../../components/ProductFilter/ProductFilterForm';
import Pagination from '@mui/material/Pagination';
import { useAppPagination } from '../../hooks/useAppPagination';
import { useGetUserQuery } from '../../redux/services/userApi';

interface ProductsPageProps {
  queryParamName: string;
  queryParamValue: string;
}

// todo: with pagination from many product to few product make scroll up
// todo: add spinner
// todo: prices range bug

const ProductsPage: FC<PropsWithChildren<ProductsPageProps>> = (props) => {
  const [searchParams] = useSearchParams();
  searchParams.set('typeId', '1');
  searchParams.set(props.queryParamName, props.queryParamValue);

  const { data, error, isLoading } = useGetProductModelsByParamsQuery(
    Object.fromEntries(searchParams.entries())
  );
  const { currentPage, handlePagination, pagesCount } = useAppPagination(
    searchParams,
    data?.count
  );
  const user = useGetUserQuery().data;

  return (
    <section className={styles.ProductsPage}>
      {props.children}
      <div className={styles.body}>
        <div className={styles.filter}>
          <ProductFilterForm ranges={data?.ranges} />
        </div>
        <div>
          <div className={styles.products}>
            {isLoading && 'Данные загружаются'}
            {error && 'Ошибка загрузки данных с сервера'}
            {!isLoading && !error && !data?.rows.length
              ? 'Нет товаров соответсвующих выбранным параметрам'
              : data?.rows.map((model) => (
                  <ProductCard key={model.id} model={model} userId={user?.id} />
                ))}
          </div>
          <div className={styles.paginator}>
            {pagesCount && (
              <Pagination
                onChange={handlePagination}
                page={currentPage}
                count={pagesCount}
              ></Pagination>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;

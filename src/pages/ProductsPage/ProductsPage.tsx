import React, { FC, PropsWithChildren } from 'react';
import styles from './ProductsPage.module.css';
import { useSearchParams } from 'react-router-dom';
import ProductFilterForm from '../../components/ProductFilter/ProductFilterForm';
import { useGetProductsByParamsQuery } from '../../redux/services/productsApi';
import Products from './Products/Products';
import { useAppPagination } from '../../hooks/useAppPagination';
import { AppSearchParams } from '../../variables/AppSearchParams';
import { useScrollToTop } from '../../hooks/useScrollToTop';

interface ProductsPageProps {
  queryParamName: string;
  queryParamValue: string;
}

// todo: with pagination from many product to few product make scroll up
// todo: add spinner

const ProductsPage: FC<PropsWithChildren<ProductsPageProps>> = (props) => {
  useScrollToTop();

  const [searchParams] = useSearchParams();
  searchParams.set(AppSearchParams.TYPE_ID, '1');
  searchParams.set(props.queryParamName, props.queryParamValue);

  const productsLimit = 9;
  searchParams.set(AppSearchParams.LIMIT, productsLimit.toString());

  const { data, error, isLoading } = useGetProductsByParamsQuery(
    Object.fromEntries(searchParams.entries())
  );

  const { currentPage, handlePagination, pagesCount } = useAppPagination(
    searchParams,
    productsLimit,
    data?.count
  );



  return (
    <section className={styles.ProductsPage}>
      {props.children}
      <div className={styles.body}>
        <div className={styles.filter}>
          <ProductFilterForm ranges={data?.ranges} />
        </div>
        <Products
          products={data}
          isLoading={isLoading}
          error={error}
          queryParamName={props.queryParamName}
          queryParamValue={props.queryParamValue}
          currentPage={currentPage}
          pagesCount={pagesCount}
          handlePagination={handlePagination}
        />
      </div>
    </section>
  );
};

export default ProductsPage;

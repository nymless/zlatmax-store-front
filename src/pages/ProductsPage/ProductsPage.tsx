import React, { FC, PropsWithChildren } from 'react';
import styles from './ProductsPage.module.css';
import { useSearchParams } from 'react-router-dom';
import ProductFilterForm from '../../components/ProductFilter/ProductFilterForm';
import { useGetProductsByParamsQuery } from '../../redux/services/productsApi';
import Products from './Products/Products';

interface ProductsPageProps {
  queryParamName: string;
  queryParamValue: string;
}

// todo: with pagination from many product to few product make scroll up
// todo: add spinner

const ProductsPage: FC<PropsWithChildren<ProductsPageProps>> = (props) => {
  const [searchParams] = useSearchParams();
  searchParams.set('typeId', '1');
  searchParams.set(props.queryParamName, props.queryParamValue);

  const { data, error, isLoading } = useGetProductsByParamsQuery(
    Object.fromEntries(searchParams.entries())
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
          searchParams={searchParams}
        />
      </div>
    </section>
  );
};

export default ProductsPage;

import React, { FC } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useGetProductModelsByParamsQuery } from '../../redux/services/productsApi';
import { ProductSelectors } from '../../hooks/useProductSelectors';
import styles from './ProductsPage.module.css';
import { withContainer } from '../../hoc/withContainer';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import ProductFilterForm from '../../components/ProductFilter/ProductFilterForm';
import { string } from 'yup';
import Pagination from '@mui/material/Pagination';
import { AppBreadcrumbs } from '../../components/AppBreadcrumbs/AppBreadcrumbs';
import { useAppPagination } from '../../hooks/useAppPagination';
import { useAppBreadcrumbs } from '../../hooks/useAppBreadcrumbs';

interface ProductsPageProps {
  selectors: ProductSelectors;
}

const ProductsPage: FC<ProductsPageProps> = (props) => {
  const location = useLocation();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  searchParams.set('typeId', '1');

  const validRoutes = ['category', 'brand', 'bladeMaterial'];
  const routeSchema = string().oneOf(validRoutes).required();
  const route = location.pathname.split('/')[1];
  const isRouteValid = routeSchema.isValidSync(route);
  const routeId = route + 'Id';

  if (id && isRouteValid) {
    searchParams.set(routeId, id);
  }

  const { data, error, isLoading } = useGetProductModelsByParamsQuery(
    Object.fromEntries(searchParams.entries())
  );

  const pagesCount = data?.count ? Math.ceil(data.count / 9) : null;

  const { currentPage, handlePagination } = useAppPagination(searchParams);
  const { pageName, linkName } = useAppBreadcrumbs(route, id);

  // TODO: add spinner
  return (
    <section className={styles.ProductsPage}>
      <div className={styles.heading}>{pageName}</div>
      <div className={styles.breadcrumbs}>
        <AppBreadcrumbs
          pageName={pageName}
          linkName={linkName}
          linkRoute={'/' + route}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.filter}>
          <ProductFilterForm
            selectors={props.selectors}
            ranges={data?.ranges}
          />
        </div>
        <div>
          <div className={styles.paginator}>
            {pagesCount && (
              <Pagination
                onChange={handlePagination}
                page={currentPage}
                count={pagesCount}
              ></Pagination>
            )}
          </div>
          <div className={styles.products}>
            {isLoading && 'Данные загружаются'}
            {error && 'Ошибка загрузки данных с сервера'}
            {!isLoading && !error && !data?.rows.length
              ? 'Нет товаров соответсвующих выбранным параметрам'
              : data?.rows.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      img={product.img}
                      productId={product.id}
                    />
                  );
                })}
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

export default withContainer(ProductsPage);

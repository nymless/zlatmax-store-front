import React, { FC, useEffect, useMemo } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useGetProductModelsByParamsQuery } from '../../redux/services/productsApi';
import { ProductSelectors } from '../../hooks/useProductSelectors';
import styles from './ProductsPage.module.css';
import { withContainer } from '../../hoc/withContainer';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { filterTruthy } from '../../utils/filterTruthy';
import ProductFilterForm from '../../components/ProductFilter/ProductFilterForm';
import { string } from 'yup';

interface ProductsPageProps {
  selectors: ProductSelectors;
}

const ProductsPage: FC<ProductsPageProps> = (props) => {
  const location = useLocation();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const allParams = useMemo(
    () =>
      ({
        typeId: searchParams.get('typeId'),
        price: searchParams.get('price'),
        categoryId: searchParams.get('categoryId'),
        brandId: searchParams.get('brandId'),
        bladeMaterialId: searchParams.get('bladeMaterialId'),
        handleMaterialId: searchParams.get('handleMaterialId'),
        handguardMaterialId: searchParams.get('handguardMaterialId'),
        gildingId: searchParams.get('gildingId'),
        totalLength: searchParams.get('totalLength'),
        bladeLength: searchParams.get('bladeLength'),
        bladeWidth: searchParams.get('bladeWidth'),
        rating: searchParams.get('rating'),
        page: searchParams.get('page'),
        limit: searchParams.get('limit'),
      } as Record<string, string | null>),
    [searchParams]
  );

  useEffect(() => {
    const routes = ['category', 'brand', 'bladeMaterial'];
    const routeSchema = string().oneOf(routes).required();
    const route = location.pathname.split('/')[1];
    const field = route + 'Id';
    const isRouteValid = routeSchema.isValidSync(route);

    if (id && isRouteValid) {
      allParams.typeId = '1';
      allParams[field] = id;
      props.selectors.setTypeId(1);

      if (route === 'category' && !props.selectors.categoryId) {
        props.selectors.setCategoryId(Number.parseInt(id));
      } else if (route === 'brand' && !props.selectors.brandId) {
        props.selectors.setBrandId(Number.parseInt(id));
      } else if (
        route === 'bladeMaterial' &&
        !props.selectors.bladeMaterialId
      ) {
        props.selectors.setBladeMaterialId(Number.parseInt(id));
      }
    }
  }, [allParams, id, location.pathname, props.selectors]);

  const params = filterTruthy(allParams);

  const { data, error, isLoading } = useGetProductModelsByParamsQuery(params);

  // TODO: add pagination
  const count = data?.count;

  // TODO: add spinner
  return (
    <section className={styles.ProductsPage}>
      <div className={styles.heading}>Название</div>
      <div className={styles.breadcrumbs}>Breadcrumbs...</div>
      <div className={styles.body}>
        <div className={styles.filter}>
          <ProductFilterForm
            selectors={props.selectors}
            ranges={data?.ranges}
          />
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
      </div>
    </section>
  );
};

export default withContainer(ProductsPage);

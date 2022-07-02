import React, { FC } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useGetProductModelsByParamsQuery } from '../../redux/services/productsApi';
import { ProductSelectors } from '../../hooks/useProductSelectors';
import styles from './ProductsPage.module.css';
import { withContainer } from '../../hoc/withContainer';
import { useSearchParams } from 'react-router-dom';
import { filterTruthy } from '../../utils/filterTruthy';
import ProductFilterForm from '../../components/ProductFilter/ProductFilterForm';

interface ProductsPageProps {
  selectors: ProductSelectors;
}

const ProductsPage: FC<ProductsPageProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const allParams = {
    typeId: searchParams.get('typeId'),
    brandId: searchParams.get('brandId'),
    categoryId: searchParams.get('categoryId'),
    bladeMaterialId: searchParams.get('bladeMaterialId'),
    rating: searchParams.get('rating'),
    totalLength: searchParams.get('totalLength'),
    bladeLength: searchParams.get('bladeLength'),
    bladeWidth: searchParams.get('bladeWidth'),
    page: searchParams.get('page'),
    limit: searchParams.get('limit'),
  };

  const realParams = filterTruthy(allParams);

  const { data, error, isLoading } =
    useGetProductModelsByParamsQuery(realParams);

  // TODO: add pagination
  const count = data?.count;

  // TODO: add spinner
  return (
    <section className={styles.ProductsPage}>
      <div className={styles.heading}>Название</div>
      <div className={styles.breadcrumbs}>Breadcrumbs...</div>
      <div className={styles.body}>
        <div className={styles.filter}>
          <ProductFilterForm selectors={props.selectors} />
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

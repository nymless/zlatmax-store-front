import React from 'react';
import { useParams } from 'react-router-dom';
import Description from '../../components/Description/Description';
import Gallery from '../../components/Gallery/Gallery';
import Product from '../../components/Product/Product';
import { withContainer } from '../../hoc/withContainer';
import { useGetProductModelByIdQuery } from '../../redux/services/productsApi';
import styles from './ProductPage.module.css';

const ProductPage = () => {
  const productModelId = useParams().id;

  const { data, error, isLoading } = useGetProductModelByIdQuery(
    Number.parseInt(productModelId as string)
  );

  if (isLoading) {
    return <div className={styles.ProductPage}>Данные загружаются</div>;
  }

  if (error) {
    return <div className={styles.ProductPage}>Ошибка загрузки данных</div>;
  }

  if (!data) {
    return <div className={styles.ProductPage}>Товар не найден</div>;
  }

  return (
    <div className={styles.ProductPage}>
      <div className={styles.breadcrumbs}>Breadcrumbs...</div>
      <div className={styles.body}>
        <div className={styles.product}>
          <Gallery product={data} />
          <Product product={data} />
        </div>
        <div className={styles.description}>
          <Description product={data} />
        </div>
      </div>
    </div>
  );
};

export default withContainer(ProductPage);

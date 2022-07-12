import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Description from '../../components/Description/Description';
import Gallery from '../../components/Gallery/Gallery';
import Product from '../../components/Product/Product';
import { withContainer } from '../../hoc/withContainer';
import {
  useGetCategoryByIdQuery,
  useGetProductModelByIdQuery,
} from '../../redux/services/productsApi';
import styles from './ProductPage.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ProductPage = () => {
  const id = useParams().id;
  const { data, error, isLoading } = useGetProductModelByIdQuery(
    Number.parseInt(id as string)
  );
  const categoryId = data?.categoryId;
  const categoryName = useGetCategoryByIdQuery(categoryId as number).data?.name;

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
      <div className={styles.breadcrumbs}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link className={styles.link} to="/">
            Главная
          </Link>
          <Link className={styles.link} to="/category">
            Категория ножей
          </Link>
          <Link className={styles.link} to={`/category/${categoryId}`}>
            {categoryName}
          </Link>
          <span className={styles.page}>{data.name}</span>
        </Breadcrumbs>
      </div>
      <div className={styles.body}>
        <div className={styles.product}>
          <Gallery product={data} />
          <Product productModel={data} />
        </div>
        <div className={styles.description}>
          <Description product={data} />
        </div>
      </div>
    </div>
  );
};

export default withContainer(ProductPage);

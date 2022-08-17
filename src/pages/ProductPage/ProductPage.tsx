import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DataTabs from '../../components/DataTabs/DataTabs';
import Gallery from '../../shared/Gallery/Gallery';
import ProductPanel from '../../components/ProductPanel/ProductPanel';
import { withContainer } from '../../hoc/withContainer';
import styles from './ProductPage.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useGetProductByIdQuery } from '../../redux/services/productsApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const ProductPage = () => {
  useScrollToTop();

  const idString = useParams().id!;
  const id = Number.parseInt(idString);

  const getProductResponse = useGetProductByIdQuery(id);
  const getProductData = getProductResponse.data;
  const getProductError = getProductResponse.error;
  const getProductIsLoading = getProductResponse.isLoading;

  const categoryId = getProductData?.categoryId;
  const categoryName = useSelector((state: RootState) => {
    if (!categoryId) {
      return;
    }
    return state.app.appCategories[categoryId];
  });

  if (getProductIsLoading) {
    return <div className={styles.ProductPage}>Данные загружаются</div>;
  }

  if (getProductError) {
    return <div className={styles.ProductPage}>Не корректный запрос</div>;
  }

  if (!getProductData) {
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
          {categoryName && (
            <Link className={styles.link} to={`/category/${categoryId}`}>
              {categoryName}
            </Link>
          )}
          <span className={styles.page}>
            {getProductData.name}
          </span>
        </Breadcrumbs>
      </div>
      <div className={styles.body}>
        <div className={styles.product}>
          <Gallery product={getProductData} />
          <ProductPanel
            product={getProductData}
          />
        </div>
        <div className={styles.description}>
          <DataTabs product={getProductData} />
        </div>
      </div>
    </div>
  );
};

export default withContainer(ProductPage);

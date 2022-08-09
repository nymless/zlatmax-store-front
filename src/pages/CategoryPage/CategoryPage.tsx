import React, { FC, useEffect, useState } from 'react';
import { withContainer } from '../../hoc/withContainer';
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductsPage from '../ProductsPage/ProductsPage';
import styles from '../ProductsPage/ProductsPage.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetSelectedIds,
  setSelectedCategoryId,
  setSelectedTypeId,
} from '../../redux/reducers/selectReducer';
import { RootState } from '../../redux/store';
import { AppSearchParams } from '../../variables/AppSearchParams';

interface CategoryPageProps {}

// todo: 404 page component

const CategoryPage: FC<CategoryPageProps> = () => {
  const dispatch = useDispatch();
  const categoryId = useParams().id;
  const location = useLocation();
  const [id, setId] = useState<number>();

  useEffect(() => {
    dispatch(resetSelectedIds());
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (!categoryId) {
      return;
    }
    setId(Number.parseInt(categoryId));
  }, [categoryId]);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(setSelectedTypeId(1));
    dispatch(setSelectedCategoryId(id));
  }, [dispatch, id]);

  const pageName = useSelector((state: RootState) => {
    if (!id || !state.app.appCategories[id]) {
      return null;
    }
    return state.app.appCategories[id];
  });

  if (!id) {
    return <div>404 error</div>;
  }

  return (
    <div>
      <ProductsPage
        queryParamName={AppSearchParams.CATEGORY_ID}
        queryParamValue={id.toString()}
      >
        <div className={styles.heading}>{pageName}</div>
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
            <span className={styles.page}>{pageName}</span>
          </Breadcrumbs>
        </div>
      </ProductsPage>
    </div>
  );
};

export default withContainer(CategoryPage);

import React, { FC, useEffect, useState } from 'react';
import { AppContainer } from '../../shared/AppContainer/AppContainer';
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
} from '../../redux/reducers/selectSlice';
import { RootState } from '../../redux/store';
import { AppSearchParams } from '../../variables/AppSearchParams';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { parseInt } from '../../utils/parseInt';
import { AppRouts } from '../../variables/AppRouts';
import NotFound from '../../shared/NotFound/NotFound';

interface CategoryPageProps {
}

const CategoryPage: FC<CategoryPageProps> = () => {
  useScrollToTop();

  const dispatch = useDispatch();
  const categoryIdString = useParams().id;
  const categoryId = parseInt(categoryIdString);
  const location = useLocation();
  const [id, setId] = useState<number>(categoryId);

  useEffect(() => {
    dispatch(resetSelectedIds());
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (!categoryId) {
      return;
    }
    setId(categoryId);
  }, [categoryId]);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(setSelectedTypeId(1));
    dispatch(setSelectedCategoryId(id));
  }, [dispatch, id]);

  const pageName = useSelector((state: RootState) => {
    if (!id || !state.appState.appCategories[id]) {
      return null;
    }
    return state.appState.appCategories[id];
  });

  if (!categoryId) {
    return <AppContainer><NotFound /></AppContainer>;
  }

  if (!id) {
    return null;
  }

  return (
    <AppContainer>
      <ProductsPage
        queryParamName={AppSearchParams.CATEGORY_ID}
        queryParamValue={id.toString()}
      >
        <h2 className={styles.heading}>{pageName}</h2>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            <Link className={styles.link} to='/'>
              Главная
            </Link>
            <Link className={styles.link} to={AppRouts.CATEGORY}>
              Категория ножей
            </Link>
            <span className={styles.page}>{pageName}</span>
          </Breadcrumbs>
        </div>
      </ProductsPage>
    </AppContainer>
  );
};

export default CategoryPage;

import React, { FC, useEffect, useState } from 'react';
import { AppContainer } from '../../shared/AppContainer/AppContainer';
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductsPage from '../ProductsPage/ProductsPage';
import styles from '../ProductsPage/ProductsPage.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedIds, setSelectedBrandId, setSelectedTypeId } from '../../redux/reducers/selectSlice';
import { RootState } from '../../redux/store';
import { AppSearchParams } from '../../variables/AppSearchParams';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { AppRouts } from '../../variables/AppRouts';
import { parseInt } from '../../utils/parseInt';
import NotFound from '../../shared/NotFound/NotFound';

interface BrandPageProps {
}

const BrandPage: FC<BrandPageProps> = () => {
  useScrollToTop();

  const dispatch = useDispatch();
  const brandIdString = useParams().id;
  const brandId = parseInt(brandIdString);
  const location = useLocation();
  const [id, setId] = useState<number>(brandId);

  useEffect(() => {
    dispatch(resetSelectedIds());
  }, [dispatch, location]);

  useEffect(() => {
    if (!brandId) {
      return;
    }
    setId(brandId);
  }, [brandId]);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(setSelectedTypeId(1));
    dispatch(setSelectedBrandId(id));
  }, [dispatch, id]);

  const pageName = useSelector((state: RootState) => {
    if (!id || !state.appState.appBrands[id]) {
      return null;
    }
    return state.appState.appBrands[id];
  });

  if (!brandId) {
    return <AppContainer><NotFound /></AppContainer>;
  }

  if (!id) {
    return null;
  }

  return (
    <AppContainer>
      <ProductsPage
        queryParamName={AppSearchParams.BRAND_ID}
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
            <Link className={styles.link} to={AppRouts.BRAND}>
              Производство ножей
            </Link>
            <span className={styles.page}>{pageName}</span>
          </Breadcrumbs>
        </div>
      </ProductsPage>
    </AppContainer>
  );
};

export default BrandPage;

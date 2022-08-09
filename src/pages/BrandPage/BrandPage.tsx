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
  setSelectedBrandId,
  setSelectedTypeId,
} from '../../redux/reducers/selectReducer';
import { RootState } from '../../redux/store';
import { AppSearchParams } from '../../variables/AppSearchParams';

interface BrandPageProps {}

const BrandPage: FC<BrandPageProps> = () => {
  const dispatch = useDispatch();
  const brandId = useParams().id;
  const location = useLocation();
  const [id, setId] = useState<number>();

  useEffect(() => {
    dispatch(resetSelectedIds());
  }, [dispatch, location]);

  useEffect(() => {
    if (!brandId) {
      return;
    }
    setId(Number.parseInt(brandId));
  }, [brandId]);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(setSelectedTypeId(1));
    dispatch(setSelectedBrandId(id));
  }, [dispatch, id]);

  const pageName = useSelector((state: RootState) => {
    if (!id || !state.app.appBrands[id]) {
      return null;
    }
    return state.app.appBrands[id];
  });

  if (!id) {
    return <div>404 error</div>;
  }

  return (
    <ProductsPage
      queryParamName={AppSearchParams.BRAND_ID}
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
          <Link className={styles.link} to="/brand">
            Производство ножей
          </Link>
          <span className={styles.page}>{pageName}</span>
        </Breadcrumbs>
      </div>
    </ProductsPage>
  );
};

export default withContainer(BrandPage);

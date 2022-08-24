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
  setSelectedBladeMaterialId,
  setSelectedTypeId,
} from '../../redux/reducers/selectSlice';
import { RootState } from '../../redux/store';
import { AppSearchParams } from '../../variables/AppSearchParams';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { AppRouts } from '../../variables/AppRouts';

interface MaterialPageProps {}

const MaterialPage: FC<MaterialPageProps> = () => {
  useScrollToTop();

  const dispatch = useDispatch();
  const bladeMaterialId = useParams().id;
  const location = useLocation();
  const [id, setId] = useState<number>();

  useEffect(() => {
    dispatch(resetSelectedIds());
  }, [dispatch, location]);

  useEffect(() => {
    if (!bladeMaterialId) {
      return;
    }
    setId(Number.parseInt(bladeMaterialId));
  }, [bladeMaterialId]);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(setSelectedTypeId(1));
    dispatch(setSelectedBladeMaterialId(id));
  }, [dispatch, id]);

  const pageName = useSelector((state: RootState) => {
    if (!id || !state.appState.appBladeMaterials[id]) {
      return null;
    }
    return state.appState.appBladeMaterials[id];
  });

  if (!id) {
    return <div>404 error</div>;
  }

  return (
    <AppContainer>
      <ProductsPage
        queryParamName={AppSearchParams.BLADE_MATERIAL_ID}
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
            <Link className={styles.link} to={AppRouts.MATERIAL}>
              Ножи по маркам стали
            </Link>
            <span className={styles.page}>{pageName}</span>
          </Breadcrumbs>
        </div>
      </ProductsPage>
    </AppContainer>
  );
};

export default MaterialPage;

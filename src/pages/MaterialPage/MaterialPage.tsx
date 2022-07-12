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
  setSelectedBladeMaterialId,
  setSelectedTypeId,
} from '../../redux/reducers/selectedReducer';
import { RootState } from '../../redux/store';

interface MaterialPageProps {}

const MaterialPage: FC<MaterialPageProps> = () => {
  const dispatch = useDispatch();
  const bladeMaterialId = useParams().id;
  const location = useLocation();
  const [id, setId] = useState<number>();

  useEffect(() => {
    dispatch(resetSelectedIds());
  }, [dispatch, location]);

  useEffect(() => {
    if (bladeMaterialId) {
      setId(Number.parseInt(bladeMaterialId));
    }
  }, [bladeMaterialId]);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(setSelectedTypeId(1));
    dispatch(setSelectedBladeMaterialId(id));
  }, [dispatch, id]);

  const pageName = useSelector((state: RootState) => {
    if (!id || !state.app.appBladeMaterials[id]) {
      return null;
    }
    return state.app.appBladeMaterials[id];
  });

  if (!id) {
    return <div>404 error</div>;
  }

  return (
    <ProductsPage queryParamName="bladeMaterialId" queryParamValue={id.toString()}>
      <div className={styles.heading}>{pageName}</div>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link className={styles.link} to="/">
            Главная
          </Link>
          <Link className={styles.link} to="/material">
            Ножи по маркам стали
          </Link>
          <span className={styles.page}>{pageName}</span>
        </Breadcrumbs>
      </div>
    </ProductsPage>
  );
};

export default withContainer(MaterialPage);

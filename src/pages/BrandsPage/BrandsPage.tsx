import React, { FC } from 'react';
import { SelectorCard } from '../../shared/SelectorCard/SelectorCard';
import { AppContainer } from '../../shared/AppContainer/AppContainer';
import styles from './BrandsPage.module.css';
import { useGetBrandsQuery } from '../../redux/api/productDetailsApi';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

interface BrandsPageProps {}

const BrandsPage: FC<BrandsPageProps> = (props) => {
  useScrollToTop();

  const manufacturers = useGetBrandsQuery().data;

  return (
    <AppContainer>
      <div className={styles.BrandsPage}>
        <div className={styles.heading}>Производство ножей</div>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link className={styles.link} to="/">
              Главная
            </Link>
            <span className={styles.page}>Производство ножей</span>
          </Breadcrumbs>
        </div>
        <div className={styles.body}>
          {manufacturers &&
            manufacturers.map((manufacturer) => {
              return (
                <SelectorCard
                  key={manufacturer.id}
                  route="/brand"
                  name={manufacturer.name}
                  img={manufacturer.img}
                  id={manufacturer.id}
                />
              );
            })}
        </div>
      </div>
    </AppContainer>
  );
};

export default BrandsPage;

import React, { FC } from 'react';
import styles from './MaterialsPage.module.css';
import { SelectorCard } from '../../shared/SelectorCard/SelectorCard';
import { withContainer } from '../../hoc/withContainer';
import { useGetBladeMaterialsQuery } from '../../redux/services/knifeMaterialsApi';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

interface MaterialsPageProps {}

const MaterialsPage: FC<MaterialsPageProps> = (props) => {
  useScrollToTop();

  const materials = useGetBladeMaterialsQuery().data;

  return (
    <div className={styles.MaterialsPage}>
      <div className={styles.heading}>Ножи по маркам стали</div>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link className={styles.link} to="/">
            Главная
          </Link>
          <span className={styles.page}>Ножи по маркам стали</span>
        </Breadcrumbs>
      </div>
      <div className={styles.body}>
        {materials &&
          materials.map((material) => {
            return (
              <SelectorCard
                key={material.id}
                route="/bladeMaterial"
                name={material.name}
                img={material.img}
                id={material.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default withContainer(MaterialsPage);

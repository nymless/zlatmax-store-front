import React, { FC } from 'react';
import { SelectorCard } from '../../components/SelectorCard/SelectorCard';
import { withContainer } from '../../hoc/withContainer';
import styles from './BrandsPage.module.css';
import { useGetBrandsQuery } from '../../redux/services/productDetailsApi';
import { useScrollToTop } from '../../hooks/useScrollToTop';

interface BrandsPageProps {}

const BrandsPage: FC<BrandsPageProps> = (props) => {
  useScrollToTop();

  const manufacturers = useGetBrandsQuery().data;

  return (
    <div className={styles.BrandsPage}>
      <div className={styles.heading}>Производство ножей</div>
      <div className={styles.breadcrumbs}>Breadcrumbs...</div>
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
  );
};

export default withContainer(BrandsPage);

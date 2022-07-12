import React, { FC } from 'react';
import { SelectorCard } from '../../components/SelectorCard/SelectorCard';
import { withContainer } from '../../hoc/withContainer';
import { useGetBrandsQuery } from '../../redux/services/productsApi';
import styles from './BrandsPage.module.css';

interface BrandsPageProps {}

const BrandsPage: FC<BrandsPageProps> = (props) => {
  const manufacturers = useGetBrandsQuery().data;

  return (
    <div className="_container">
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
    </div>
  );
};

export default withContainer(BrandsPage);

import React, { FC } from 'react';
import styles from './MaterialsPage.module.css';
import { SelectorCard } from '../../components/SelectorCard/SelectorCard';
import { useGetBladeMaterialsQuery } from '../../redux/services/productsApi';
import { withContainer } from '../../hoc/withContainer';

interface MaterialsPageProps {}

const MaterialsPage: FC<MaterialsPageProps> = (props) => {
  const materials = useGetBladeMaterialsQuery().data;

  return (
    <div className="_container">
      <div className={styles.MaterialsPage}>
        <div className={styles.heading}>Ножи по маркам стали</div>
        <div className={styles.breadcrumbs}>Breadcrumbs...</div>
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
    </div>
  );
};

export default withContainer(MaterialsPage);

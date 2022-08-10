import React, { FC } from 'react';
import styles from './MaterialsPage.module.css';
import { SelectorCard } from '../../components/SelectorCard/SelectorCard';
import { withContainer } from '../../hoc/withContainer';
import { useGetBladeMaterialsQuery } from '../../redux/services/knifeMaterialsApi';

interface MaterialsPageProps {}

const MaterialsPage: FC<MaterialsPageProps> = (props) => {
  const materials = useGetBladeMaterialsQuery().data;

  return (
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
  );
};

export default withContainer(MaterialsPage);

import React, { FC } from 'react';
import { SelectorCard } from '../../components/SelectorCard/SelectorCard';
import { withContainer } from '../../hoc/withContainer';
import { ProductSelectors } from '../../hooks/useProductSelectors';
import { useGetBrandsQuery } from '../../redux/services/productsApi';
import styles from './BrandPage.module.css';

interface BrandPageProps {
  selectors: ProductSelectors;
}

const BrandPage: FC<BrandPageProps> = (props) => {
  const manufacturers = useGetBrandsQuery().data;

  const onClickHandler = (id: number) => {
    props.selectors.setBrandId(id);
  };

  return (
    <div className="_container">
      <div className={styles.BrandPage}>
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
                  onClickHandler={onClickHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default withContainer(BrandPage);
